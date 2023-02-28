import { connect } from '@planetscale/database'

import { initHeaders } from "./middlewares/initHeaders"
import { prepHomePage } from "./middlewares/prepHomePage"
import { prepAboutPage } from "./middlewares/prepAboutPage"
import { prepSpecificPost } from "./middlewares/prepSpecificPost"
import { renderLayout } from './views/renderLayout'
import { handleSocialAuth } from './middlewares/handleSocialAuth'

const getUserInfo = () => { }
const allowAll = () => { }
const allowOnlyAuthenticatedUsers = () => { }
const renderPage = () => { }
const OauthCallback = (ctx) => { 
    console.log(ctx.request)
}

const routes = new Map([
    ["GET/", [initHeaders, getUserInfo, allowAll, prepHomePage, renderLayout]],
    ['GET/about', [initHeaders, getUserInfo, allowAll, prepAboutPage, renderLayout]],
    ["GET/p/:id", [initHeaders, getUserInfo, allowAll, prepSpecificPost, renderLayout]],
    // ["GET/oauth/google/login", [handleSocialAuth]],
    ["POST/oauth/:id/callback", [handleSocialAuth]],

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
                host: env.DATABASE_HOST,
                username: env.DATABASE_USERNAME,
                password: env.DATABASE_PASSWORD
            }

            ctx.conn = connect(config)

            // ------------------------------------------   
            // Resolve the route and execute the app logic
            // ------------------------------------------   

            if (routes.has(cleanedURL)) {
                let middlewares = routes.get(cleanedURL)
                for (const middleware of middlewares) {
                    await middleware(ctx)
                }
                // handler(ctx)
                return new Response(ctx.res.bodyText, { status: 200, headers: ctx.res.headersList })

            } else {
                throw new Error("404", { cause: "Not all who wander are lost" })
            }
        } catch (err) {
            // Sepaaretd these out as this are the general user errors and may need to be customized
            if (["401", "404", "418"].includes(err.message)) {
                return new Response(`${err.message}\n${err.stack} }`, { status: err.message })
            } else {
                return new Response(`Server Error - 500\n${err.message}\n${err.stack}`, { status: 500 })
            }
        }
    },
}