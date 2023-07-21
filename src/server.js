import { sayHello } from "./handlers/sayHello";
import { respondWithErrorMessage } from "./handlers/respondWithErrorMessage";
import { showErrorPage } from "./handlers/showErrorPage";

import { showAboutPage } from "./handlers/showAboutPage"
import { showHomePage } from "./handlers/showHomePage"
import { showPostPage } from "./handlers/showPostPage"
import { signinGoogleUser } from "./handlers/signinGoogleUser"

let routes = {
    // API Routes
    "GET/api/hello": sayHello,
    "POST/api/signinGoogleUser" : signinGoogleUser,

    // Static Routes
    "GET/"                      : showHomePage,
    "GET/about": showAboutPage,

    // Dynamic Routes
    "GET/p/:id"                 : showPostPage,
}

export default {
    async fetch(request, env, ctx) {
        // console.log(`${request.method}::${request.url}`)
        const url = new URL(request.url);

        // ------------------------------------------
        // Serve Static assets -  don't handle 404s
        // ------------------------------------------
        if (url.pathname.startsWith("/pub")) {
            return env.ASSETS.fetch(request);
        }

        // ------------------------------------------
        // handle Dynamic Routes
        // ------------------------------------------          
        let handler

        let urlFrag = url.pathname.split('/').filter((a) => a)
        if (url.pathname.startsWith("/api")) {
            if (urlFrag[2]) {
                urlFrag[2] = ":id"
            }
        } else {
            if (urlFrag[1]) {
                urlFrag[1] = ":id"
            }
        }
        let cleanedURL = `${request.method}/${urlFrag.join('/')}`
 
        if (cleanedURL in routes) {
            handler = routes[cleanedURL];
        } else {
            handler = () => { throw new Error(404, { cause: "Not all who wander are lost" }) }
        }

        // ------------------------------------------
        // Serve the chosen Handler
        // ------------------------------------------
        let res
        try {
            res = await handler(request, env, ctx)
            console.log(res)
        } catch (e) {
            console.log(e)

            // // Build the error response
            if (url.pathname.startsWith("/api")) {
                res = respondWithErrorMessage(e)
            } else {
                res = showErrorPage(e)
            }
        }
        return res
    }
}
