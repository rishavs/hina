
const initHeaders = async (ctx) => {
    ctx.res.headersList.append('Powered-by', 'Pika Pika Pika Choooo')
}

const renderHomePage = async (ctx) => {
    ctx.res.bodyText = "HOME"
}

const renderAboutPage = async (ctx) => {
    ctx.res.bodyText = "ABOUT"
}
const renderSpecificPost = async (ctx) => {
    ctx.res.bodyText = `Type: ${ctx.req.resourceType}\nID: ${ctx.req.resourceId}`
}

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