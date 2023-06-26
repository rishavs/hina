import { connect } from '@planetscale/database'

import { initHeaders } from "./middlewares/initHeaders"
import { buildErrorPage } from "./middlewares/buildErrorPage"
import { buildHomePage } from "./middlewares/buildHomePage"
import { buildAboutPage } from "./middlewares/buildAboutPage"
import { buildSpecificPost } from "./middlewares/buildSpecificPost"
import { renderLayout } from './views/renderLayout'
// import { handleSocialAuth } from './middlewares/handleSocialAuth'
// import { build } from 'esbuild'

const getUserInfo = () => { }
const allowAll = () => { }
const allowOnlyAuthenticatedUsers = () => { }
const updateMetaTags = () => { }
const OauthCallback = (ctx) => { 
    console.log(ctx.request)
}

// const getGoogleDiscoveryDoc = async () => {

//         /**
//      * Example someHost is set up to take in a JSON request
//      * Replace url with the host you wish to send requests to
//      * @param {string} someHost the host to send the request to
//      * @param {string} url the URL to send the request to
//      */
//         const url = 'https://accounts.google.com/.well-known/openid-configuration'
    
//         /**
//          * gatherResponse awaits and returns a response body as a string.
//          * Use await gatherResponse(..) in an async function to get the response body
//          * @param {Response} response
//          */
//         async function gatherResponse(response) {
//           const { headers } = response;
//           const contentType = headers.get('content-type') || '';
//           if (contentType.includes('application/json')) {
//             return JSON.stringify(await response.json());
//           }
//           return response.text();
//         }
    
//         const init = {
//           headers: {
//             'content-type': 'application/json;charset=UTF-8',
//           },
//         };
        
//         const response = await fetch(url, init);
//         const results = await gatherResponse(response);
//         return new Response(results, init);
// }

const routes = new Map([
    ["GET/",        [initHeaders, getUserInfo, allowAll, buildHomePage, renderLayout]],
    ['GET/about',   [initHeaders, getUserInfo, allowAll, buildAboutPage, renderLayout]],
    ["GET/p/:id",   [initHeaders, getUserInfo, allowAll, buildSpecificPost, renderLayout]],
    // ["GET/oauth/google/login", [handleSocialAuth]],
    // ["GET/oauth/:id/callback", [handleSocialAuth]],

    // ["GET/cat/all?pickBy", [renderSpecificPost]], curated [D], new, top, trending, controversial, lively, 
    // ["GET/cat/:id", [renderSpecificPost]],
    // ["GET/u/:id", [renderSpecificPost]],
    // ["GET/u/me", [renderSpecificPost]],
    // ["GET/m/:id", [renderSpecificPost]],
    // ["GET/m/:id", [renderSpecificPost]],

]);

export default {
    async fetch(request, env) {
        const url = new URL(request.url);


        // ------------------------------------------
        // Serve Static assets
        // ------------------------------------------
        if (url.pathname.startsWith("/pub")) {
            return env.ASSETS.fetch(request);
        }

        // ------------------------------------------
        // Serve Dynamic routes
        // ------------------------------------------
        let ctx = {
            conn: null,
            user: null,
            request: request,
            req: {
                url: null,
                resourceType: null,
                resourceId: null
            },
            res: {
                pageMetadata: {
                    title: `Page Title`,
                    description: "This here is the description of the post details page",
                },
                pageContent: "",
                bodyText: "This is some exotic error",
                statusCode: 500,
                headersList: new Headers()
            }
        }

        let urlFrag = url.pathname.split('/').filter((a) => a)
        ctx.req.resourceType = urlFrag[0]

        if (urlFrag[1]) {
            ctx.req.resourceId = urlFrag[1]
            urlFrag[1] = ":id"
        }

        let cleanedURL = `${request.method}/${urlFrag.join('/')}`
        console.log(cleanedURL)
        try {
            // ------------------------------------------   
            // Add db connection to context
            // ------------------------------------------   
            const config = {
                host    : env.DATABASE_HOST,
                username: env.DATABASE_USERNAME,
                password: env.DATABASE_PASSWORD,
                fetch   : (url, init) => {
                    delete (init)["cache"]; // Remove cache header
                    return fetch(url, init);
                }
            }

            ctx.conn = connect(config);

            // ------------------------------------------   
            // Resolve the route and execute the app logic
            // ------------------------------------------   
            // REVERT

            if (routes.has(cleanedURL)) {
                let middlewares = routes.get(cleanedURL)
                for (const middleware of middlewares) {
                    await middleware(ctx)
                }
                ctx.res.statusCode = 200

            } else {
                ctx.res.statusCode = 404
                throw new Error(404, { cause: "Not all who wander are lost" })
            }
        } catch (err) {
            let middlewares = [initHeaders, buildErrorPage, renderLayout]
            for (const middleware of middlewares) {
                await middleware(ctx, err)
            }
        }
        return new Response(ctx.res.bodyText, { status: ctx.res.statusCode, headers: ctx.res.headersList })

    },
}