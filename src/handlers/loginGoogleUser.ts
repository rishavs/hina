import {jwtVerify, createRemoteJWKSet, EncryptJWT} from 'jose'
import { Store, Post, User } from '../defs'
import { nanoid } from 'nanoid'
import { getGoogleUserFromDB, addGoogleUserToDB } from '../database'

export const loginGoogleUser = async (store: Store) => {

    console.log(`loginGoogleUser`)

    let formData = await store.req.raw.formData()

    let CSRFTokenInCookie = store.req.cookies.g_csrf_token
    let CSRFTokenInPost = formData.get('g_csrf_token')
    let IDToken = formData.get('credential')

    // formData.forEach((value, key) => {
    //     console.log(`${key} ==> ${value}`);
    // })

    // console.log(`CSRFTokenInCookie: ${CSRFTokenInCookie}`)
    // console.log(`CSRFTokenInPost: ${CSRFTokenInPost}`)
    // console.log(`IDToken: ${IDToken}`)

    // Display the key/value pairs
    // store.request.headers.forEach((value, key) => {
    //     console.log(`${key} ==> ${value}`);
    // });

    // let cookies = parseCookie(store.request.headers.get('cookie'))


    // ------------------------------------------
    // Verify CSRF
    // ------------------------------------------
    if (!CSRFTokenInCookie) {
        throw new Error("503", { cause: "No CSRF token present in the google cookie" })
    }
    if (!CSRFTokenInPost) {
        throw new Error("503", { cause: "No CSRF token present in the post body" })
    }

    if (CSRFTokenInCookie != CSRFTokenInPost) {
        throw new Error("503", { cause: "CSRF token mismatch" })
    } 

    console.log(`CSRF OK as "${store.req.cookies.g_csrf_token}" == "${formData.get('g_csrf_token')}"`)

    // ------------------------------------------
    // Verify the ID Token
    // ------------------------------------------
    const JWKS = createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'))

    const { payload, protectedHeader } = await jwtVerify(IDToken as string, JWKS, {
        issuer: 'https://accounts.google.com',
        audience: store.env.GOOGLE_KEY_FULL
    })

    // ------------------------------------------
    // Verify the nonce
    // ------------------------------------------

    if (!payload.nonce) {
        throw new Error("503", { cause: "No nonce present in the ID token" })
    }
    // if (payload.nonce != store.page.nonce) {
    //     throw new Error(503, { cause: "Nonce mismatch" })
    // }

    // console.log(`nonce check. Is "${payload.nonce}" == "${store.page.nonce}"`)
    // TODO - how to pass nonce between the routes? the server is stateless!
    // Use KV for nonce? rgerenrate every hour?

    // Add nonce table in KV with datetime. if less than 1 hr old, check if nonce given for this userid is correct. if not, reject. 
    // if yes, delete nonce from table and continue. if more than 1 hr old, delete nonce from table and reject.
    

    // ------------------------------------------
    // Get user details from DB. Else add to db
    // ------------------------------------------
    let user: User = {} as User
    let isNewUser = false
    let resUserCheck = await getGoogleUserFromDB(store, payload.email as string)
    // console.log(`getUserDetails:`, JSON.stringify(resUserCheck))


    if (resUserCheck.size != 0) {
        // console.log(`user exists`, JSON.stringify(user))
        user = resUserCheck.rows[0] as User
    } else {
        // console.log(`user doesn't exist`)
        isNewUser = true

        // create new user with default values
        user.id             = nanoid(16)
        user.slug           = nanoid()
        user.name           = payload.name as string
        user.thumb          = `https://robohash.org/${user.slug}?set=set3`
        user.honorific      = "Mx"
        user.flair          = "Nony is not a Mouse"
        user.role           = "user"
        user.level          = "wood"
        user.stars          = 0
        user.creds          = 0
        user.gil            = 0
        user.google_id      = payload.email as string

        let resAddUser = await addGoogleUserToDB(store, user)
        if (resAddUser.rowsAffected != 1) {
            throw new Error("503", { cause: "Unable to add user to DB" })
        }
    }

    // ------------------------------------------
    // Set cookies. TODO - make secure. Add domain info. Add expiry
    // ------------------------------------------
    const secret = new TextEncoder().encode(store.env.SECRET)
    const jwe = await new EncryptJWT({uid: user.id})
        .setProtectedHeader({ alg: "dir", enc: "A256GCM" })
        .setIssuedAt()
        .setIssuer("https://digglu.com")
        .setExpirationTime("30d")
        .encrypt(secret);
    
    store.res.headers.append('Set-Cookie', `D_UID=${jwe}; path=/; HttpOnly; Secure; SameSite=Strict;`)

    store.res.headers.append('Set-Cookie', `D_USLUG=${user.slug};           path=/;  SameSite=Strict;`)
    store.res.headers.append('Set-Cookie', `D_UNAME=${user.name};           path=/;  SameSite=Strict;`)
    store.res.headers.append('Set-Cookie', `D_UHONORIFIC=${user.honorific}; path=/;  SameSite=Strict;`)
    store.res.headers.append('Set-Cookie', `D_UTHUMB=${user.thumb};         path=/;  SameSite=Strict;`)
    store.res.headers.append('Set-Cookie', `D_UFLAIR=${user.flair};         path=/;  SameSite=Strict;`)
    store.res.headers.append('Set-Cookie', `D_UROLE=${user.role};           path=/;  SameSite=Strict;`)
    store.res.headers.append('Set-Cookie', `D_ULEVEL=${user.level};         path=/;  SameSite=Strict;`)
    store.res.headers.append('Set-Cookie', `D_USTARS=${user.stars};         path=/;  SameSite=Strict;`)
    store.res.headers.append('Set-Cookie', `D_UCREDS=${user.creds};         path=/;  SameSite=Strict;`)
    store.res.headers.append('Set-Cookie', `D_UGIL=${user.gil};             path=/;  SameSite=Strict;`)

    // Trigger UX
    if (isNewUser) {
        store.res.headers.append('Set-Cookie', `D_MODAL_FRE=true;                           path=/; SameSite=Strict;`)
	} else {
        store.res.headers.append('Set-Cookie', `D_TOAST_SUCCESS=You have been logged in;    path=/; SameSite=Strict;`)
	}

    // ------------------------------------------
    // Redirect to the original page
    // ------------------------------------------
    // get the query param for redirectTo
    let redirectTo = store.req.url.origin + store.req.url.searchParams.get('redirectTo') || store.req.url.origin + '/'
    console.log(`redirectTo: ${redirectTo}`)

    // set window location
    store.res.status = 302
    store.res.headers.append('Location', redirectTo)

}