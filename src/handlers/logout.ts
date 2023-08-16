import { Store } from "../defs"

export const logout = async (store: Store) => {
    // delete all cookies
    store.res.headers.append('Set-Cookie', `D_UID=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`)
    store.res.headers.append('Set-Cookie', `D_USLUG=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`)
    store.res.headers.append('Set-Cookie', `D_UNAME=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`)
    store.res.headers.append('Set-Cookie', `D_UHONORIFIC=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`)
    store.res.headers.append('Set-Cookie', `D_UTHUMB=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`)
    store.res.headers.append('Set-Cookie', `D_UFLAIR=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`)
    store.res.headers.append('Set-Cookie', `D_UROLE=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`)
    store.res.headers.append('Set-Cookie', `D_ULEVEL=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`)
    store.res.headers.append('Set-Cookie', `D_USTARS=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`)
    store.res.headers.append('Set-Cookie', `D_UCREDS=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`)
    store.res.headers.append('Set-Cookie', `D_UGIL=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`)

    store.res.headers.append('Set-Cookie', `D_TOAST_SUCCESS=You have been logged out;    path=/; SameSite=Strict;`)

    store.res.status = 302
    store.res.headers.append('Location', '/')

}


// store.res.headers.append('Set-Cookie', `D_UID=${jwe}; path=/; HttpOnly; Secure; SameSite=Strict;`)

// store.res.headers.append('Set-Cookie', `D_USLUG=${user.slug};           path=/;  SameSite=Strict;`)
// store.res.headers.append('Set-Cookie', `D_UNAME=${user.name};           path=/;  SameSite=Strict;`)
// store.res.headers.append('Set-Cookie', `D_UHONORIFIC=${user.honorific}; path=/;  SameSite=Strict;`)
// store.res.headers.append('Set-Cookie', `D_UTHUMB=${user.thumb};         path=/;  SameSite=Strict;`)
// store.res.headers.append('Set-Cookie', `D_UFLAIR=${user.flair};         path=/;  SameSite=Strict;`)
// store.res.headers.append('Set-Cookie', `D_UROLE=${user.role};           path=/;  SameSite=Strict;`)
// store.res.headers.append('Set-Cookie', `D_ULEVEL=${user.level};         path=/;  SameSite=Strict;`)
// store.res.headers.append('Set-Cookie', `D_USTARS=${user.stars};         path=/;  SameSite=Strict;`)
// store.res.headers.append('Set-Cookie', `D_UCREDS=${user.creds};         path=/;  SameSite=Strict;`)
// store.res.headers.append('Set-Cookie', `D_UGIL=${user.gil};             path=/;  SameSite=Strict;`)

// // Trigger UX
// if (isNewUser) {
//     store.res.headers.append('Set-Cookie', `D_MODAL_FRE=true;                           path=/; SameSite=Strict;`)
// } else {
//     store.res.headers.append('Set-Cookie', `D_TOAST_SUCCESS=You have been logged in;    path=/; SameSite=Strict;`)