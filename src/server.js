import { initHeaders } from "./middlewares/initHeaders"
import { renderHomePage } from "./middlewares/renderHomePage"
import { renderAboutPage } from "./middlewares/renderAboutPage"
import { renderSpecificPost } from "./middlewares/renderSpecificPost"

const renderPage = () => {}

const routes = new Map([
    ["GET/", [initHeaders, renderHomePage]],
    ['GET/about', [renderAboutPage]],
    ["GET/p/:id", [renderSpecificPost]],
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
            env : env,
            req : request,
            res : {
                pageProps: {
                    title: `Page Title`,
                    description: "This here is the description of the post details page",
                },
                bodyText: "This is some exotic error",
                statusCode: 500,
                headersList : new Headers()
            } 
        }

        let urlFrag = url.pathname.split('/').filter((a) => a)
        ctx.req.resourceType = urlFrag[0]

        if(urlFrag[1]) { 
            ctx.req.resourceId = urlFrag[1]
            urlFrag[1] = ":id" 
        }
        
        let cleanedURL = `${request.method}/${urlFrag.join('/')}`
        console.log(cleanedURL)
        try {
            if (routes.has(cleanedURL)) {
                let middlewares = routes.get(cleanedURL)
                for (const middleware of middlewares) {
                    await middleware(ctx)
                } 
                // handler(ctx)
                return new Response(ctx.res.bodyText, {status: 200, headers: ctx.res.headersList})

            } else {
                throw new Error("404", {cause:"Not all who wander are lost"})
            }
        } catch (err) {
            // Sepaaretd these out as this are the general user errors and may need to be customized
            if (["401", "404", "418"].includes(err.message)) {
                return new Response (`${err.message}\n${err.stack} }`, {status: err.message})
            } else {
                return new Response (`Server Error - 500\n${err.message}\n${err.stack}`, {status: 500})
            }
        }
    },
}