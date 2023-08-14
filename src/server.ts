import { nanoid } from 'nanoid';

import { Env, Store } from './defs';

import { parseCookies } from './utils';
import {generateHTML} from './handlers/generateHTML';

import {sayHello} from './handlers/sayHello';
import {buildAboutPage} from './handlers/buildAboutPage';
import {buildHomePage} from './handlers/buildHomePage';
import {buildPostDetailsPage} from './handlers/buildPostDetailsPage';
import { loginGoogleUser } from './handlers/loginGoogleUser';

let routes : Record<string, Array<Function>> = {
    // API Routes
    "GET/api/hello"             : [() => console.log("YOYO"), sayHello],
    "POST/api/login/google"          : [() => console.log("POSTING GOOLE AUTH"), loginGoogleUser],

    
    // Static Routes
    "GET/"                      : [buildHomePage, generateHTML],
    "GET/about"                 : [buildAboutPage, generateHTML],

    // Auth routes

    // Dynamic Routes
    "GET/p/:id"                 : [buildPostDetailsPage, generateHTML],
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        let url = new URL(request.url)

        // ------------------------------------------
        // Serve Static assets -  don't handle 404s
        // ------------------------------------------
        if (url.pathname.startsWith("/pub")) {
            return env.ASSETS.fetch(request);
        }

        
		// ------------------------------------------
        // Create Store
        // ------------------------------------------
		let store : Store = {
			req: {
                raw: request,
				url: url,
				id: null,
				method: request.method,
				cookies: parseCookies(request.headers.get('Cookie')),
			},
            page : {
                title: null,
                descr: null,
                html: null,
            },
			env: env,
			res: {
				status: 200,
				headers: new Headers(),
				content: "",
			},
		} 
		let handlers: Array<Function> | null
		let route: string

        
		// ------------------------------------------
        // Set SID
        // ------------------------------------------
        console.log("Cookies: ", store.req.cookies)
        if (!store.req.cookies.D_SID) {
            store.res.headers.append('Set-Cookie', `D_SID=${nanoid()}; Path=/; HttpOnly; Secure; SameSite=Strict`)
        }


		// ------------------------------------------
        // handle APIs
        // ------------------------------------------
        if (store.req.url.pathname.startsWith("/api")) {
            store.res.headers.append('content-type', 'application/json;charset=UTF-8')
            store.res.headers.append('Powered-by', 'API: Pika Pika Pika Choooo')

			route = request.method + store.req.url.pathname
            // handlers = routes[request.method + store.req.url.pathname ];

        // ------------------------------------------
        // handle Dynamic Routes
        // ------------------------------------------
        } else {
            store.res.headers.append('Powered-by', 'VIEW: Pika Pika Pika Choooo')
            store.res.headers.append('Content-Type', 'text/html; charset=UTF-8')

            let urlFrag = store.req.url.pathname.split('/')

            console.log("URL Fragments: ", urlFrag)
            store.req.id   = urlFrag[2]

            if (urlFrag[2]) {
                urlFrag[2] = ":id"
            }
    
            route = request.method + urlFrag.join('/')

        }

        // ------------------------------------------
        // Serve the chosen Handler
        // ------------------------------------------
        console.log("Rendering page : ", route)

        try {

			if (route in routes) {
                handlers = routes[route];
            } else {
                handlers = [() => { throw new Error("404")}]
            }

            for (const handler of handlers) {
                await handler(store)
            }
        } catch (e : any) {
            console.log(e)
            store.res.content = "ERROR: \n" + e;
            if ((e).message in ["401", "404", '500']) {
                store.res.status = e.message
            } else {
                store.res.status = 500
                store.res.content = "ERROR: \n" + e;
            }

            // Build the error page
            // if (!store.req.url.pathname.startsWith("/api")) {
            //     await buildErrorPage(store, e)
            //     await generateHTML(store)
            // }
        }
        // content = showAboutPage(request, env, ctx);
        return new Response(store.res.content, { status: store.res.status, headers: store.res.headers})
	},
};
