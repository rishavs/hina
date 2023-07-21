import * as jose from 'jose'
import { parseCookie } from '../helpers/utils.js'
import { addGoogleUser } from '../database.js'

export const signinGoogleUser = async (request, env, ctx) => {

    let data = await request.formData()

    let CSRFTokenInCookie = parseCookie(request.headers.get('cookie')).g_csrf_token
    let CSRFTokenInPost = data.get('g_csrf_token')
    let IDToken = data.get('credential')

    data.forEach((value, key) => {
        console.log(`${key} ==> ${value}`);
    })

    // console.log(`CSRFTokenInCookie: ${CSRFTokenInCookie}`)
    // console.log(`CSRFTokenInPost: ${CSRFTokenInPost}`)
    // console.log(`IDToken: ${IDToken}`)

    // Display the key/value pairs
    // request.headers.forEach((value, key) => {
    //     console.log(`${key} ==> ${value}`);
    // });

    let cookies = parseCookie(request.headers.get('cookie'))


    // ------------------------------------------
    // Verify CSRF
    // ------------------------------------------
    if (!CSRFTokenInCookie) {
        throw new Error(503, { cause: "No CSRF token present in the google cookie" })
    }
    if (!CSRFTokenInPost) {
        throw new Error(503, { cause: "No CSRF token present in the post body" })
    }

    if (CSRFTokenInCookie != CSRFTokenInPost) {
        throw new Error(503, { cause: "CSRF token mismatch" })
    } 

    console.log(`CSRF OK as "${cookies.g_csrf_token}" == "${data.get('g_csrf_token')}"`)

    // ------------------------------------------
    // Verify the ID Token
    // ------------------------------------------
    const JWKS = jose.createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'))

    const { payload, protectedHeader } = await jose.jwtVerify(IDToken, JWKS, {
        issuer: 'https://accounts.google.com',
        audience: env.GOOGLE_KEY
    })

    // ------------------------------------------
    // Verify the nonce
    // ------------------------------------------

    if (!payload.nonce) {
        throw new Error(503, { cause: "No nonce present in the ID token" })
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
    // Insert user in db. 
    // ------------------------------------------
    let newUser = {
        slug        : crypto.randomUUID(),
        name        : "Nony Mouse",
        thumb       : "something", 
        honorific   : "none", 
        flair       : "none",
        role        : "user",
        level       : "wood",
        googleID   : payload.email
    }

    let res = await addGoogleUser(env, newUser);
    console.log(`addGoogleUser: ${res[0]}`)

    // ------------------------------------------
    // Set the user in the store
    // ------------------------------------------
    // store.user.googleID     = newUser.googleID
    // store.user.name         = newUser.name
    // store.user.thumb        = newUser.picture
    // store.user.slug         = newUser.slug
    // store.user.honorific    = newUser.honorific
    // store.user.flair        = newUser.flair
    // store.user.role         = newUser.role
    // store.user.level        = newUser.level

    // return a response which redirects to the home page

    // ------------------------------------------
    // Create a user session
    // ------------------------------------------

    // create a session id by combining 2 uuids, removing dashes and then truncating random num of chars between 63 & 57

    const sessionID = (crypto.randomUUID() + crypto.randomUUID()).replace(/-/gi, '').substring(0, Math.random() * (63 - 57) + 57)
  
    // Add to session store. TODO - add expiration time
    await env.SESSIONS.put(sessionID, newUser.slug);

    const value = await env.SESSIONS.get(sessionID);
    console.log(value);
    
    // ------------------------------------------
    // Set the session cookie
    // ------------------------------------------
    const cookie = `digglu_sid=${sessionID}; Path=/; HttpOnly; Secure; SameSite=Strict;`
    // const response = new Response('OK', { headers: { 'Set-Cookie': cookie } })

    // ------------------------------------------
    // Set the Local storage with user info
    // ------------------------------------------

    // ------------------------------------------
    // Redirect the user back to the previous page
    // ------------------------------------------

    // read the value of the redirectTo query param
    const redirectTo = new URL(request.url).searchParams.get('redirectTo')
    return Response.redirect(`${env.HOST}${redirectTo}?setSession=${sessionID}`, 302,  { headers: { 'Set-Cookie': cookie } })

    // On each page, we can check if sessionid exists or not and then fetch the user details from this table.
}