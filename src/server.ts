import { nanoid }               from 'nanoid';
import { Env, Store }           from './defs';

import { parseCookies }         from './utils';
import { generateHTML }         from './views/generateHTML';

import { sayHello }             from './handlers/sayHello';
import { logout }               from './handlers/logout';
import { buildAboutPage }       from './handlers/buildAboutPage';
import { buildHomePage }        from './handlers/buildHomePage';
import { buildPostDetailsPage } from './handlers/buildPostDetailsPage';
import { loginGoogleUser }      from './handlers/loginGoogleUser';
import { buildNewPostPage }     from './handlers/buildNewPostPage';
import { submitNewPostForm }    from './handlers/submitNewPostForm';

import { checkIfUserBlocked }   from './database';

let routes : Record<string, Array<Function>> = {
    // API Routes
    "GET/api/hello"             : [() => console.log("YOYO"), sayHello],
    "POST/api/submitNewPostForm": [() => console.log("POSTING NEW POST"), submitNewPostForm],
    "POST/api/login/google"     : [() => console.log("POSTING GOOLE AUTH"), loginGoogleUser],
    
    // Static Routes
    "GET/"                      : [ buildHomePage, generateHTML ],
    "GET/about"                 : [ buildAboutPage, generateHTML ],

    // Auth routes
    "GET/logout"                : [ logout ],

    // Posts
    "GET/p/new"                 : [ buildNewPostPage, generateHTML ],
    "GET/p/:slug"                 : [ buildPostDetailsPage, generateHTML ],
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

        // const payload = {"this": "is", "a": "test"};

        // const secret = new TextEncoder().encode(env.KEY4)

        // const encryptedJwt = await new EncryptJWT(payload)
        //     .setProtectedHeader({ alg: "dir", enc: "A256GCM" })
        //     .setIssuedAt()
        //     .setSubject("testSubject")
        //     .setIssuer("https://example.com")
        //     .setAudience("https://example.com/test")
        //     .setExpirationTime("1d")
        //     .encrypt(secret);

        // const options = {
        //     issuer: "https://example.com",
        //     audience: "https://example.com/test",
        //     contentEncryptionAlgorithms: ["A256GCM"],
        //     keyManagementAlgorithms: ["dir"],
        // };
        // let decrypted = await jwtDecrypt(encryptedJwt, secret, options);

        // console.log("Original text: ", payload)
        // console.log("Encrypted JWT: ", encryptedJwt)
        // console.log("Decrypted JWT: ", JSON.stringify(decrypted))
    
        let url = new URL(request.url)

        // print the user agent
        console.log("User Agent: ", request.headers.get('User-Agent'))

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
				slug: null,
				method: request.method,
                redirect: null,
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
            user: null,
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
        // TODO - sanitize. delete all cookies which are not allowed
        // ------------------------------------------

        // ------------------------------------------
        // TODO - Content Security Policy
        // ------------------------------------------
        // see https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid#content_security_policy

        // ------------------------------------------
        // Put on the HELMET!!! TODO
        // ------------------------------------------

        // ------------------------------------------
        // Set CORS - TODO
        // ------------------------------------------

        // ------------------------------------------
        // Enable HSTS - TODO
        // ------------------------------------------
        // store.res.headers.append('Strict-Transport-Security', 'max-age=3600; includeSubDomains; preload')
        // store.res.headers.append('Upgrade-Insecure-Requests', '1')
        // store.res.headers.append('Content-Security-Policy', 'upgrade-insecure-requests')

		// ------------------------------------------
        // Set Content Type
        // ------------------------------------------
        if (store.req.url.pathname.startsWith("/api")) {
            store.res.headers.append('content-type', 'application/json;charset=UTF-8')
            store.res.headers.append('Powered-by', 'API: Pika Pika Pika Choooo')

            // handlers = routes[request.method + store.req.url.pathname ];


        } else {
            store.res.headers.append('Powered-by', 'VIEW: Pika Pika Pika Choooo')
            store.res.headers.append('Content-Type', 'text/html; charset=UTF-8')

        }

        try {
            // ------------------------------------------
            // handle Static Routes
            // ------------------------------------------
			route = request.method + store.req.url.pathname

			if (route in routes) {
                handlers = routes[route];
            } else {
                // ------------------------------------------
                // handle Dynamic Routes
                // ------------------------------------------
                let urlFrag = store.req.url.pathname.split('/')

                console.log("URL Fragments: ", urlFrag)
                store.req.slug   = urlFrag[2]

                if (urlFrag[2]) {
                    urlFrag[2] = ":slug"
                }
        
                route = request.method + urlFrag.join('/')

                if (route in routes) {
                    handlers = routes[route];
                } else {

                    // ------------------------------------------
                    // handle 404
                    // ------------------------------------------
                    handlers = [() => { throw new Error("404")}]
                }
            }

            // ------------------------------------------
            // Serve the chosen Handler
            // ------------------------------------------
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
        if (store.req.redirect) {
            return Response.redirect(store.req.redirect, 302)
        }
        return new Response(store.res.content, { status: store.res.status, headers: store.res.headers})
	},
};
