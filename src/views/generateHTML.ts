import { Header } from "./header";
import { FiltersBar } from "./filtersBar";
import { loginModal } from "./loginModal";
import { freModal } from "./freModal";
import { Footer } from "./footer";
import { Store } from "../defs";
import { Alerts } from "./alerts";
import { Toasts } from "./toasts";


export const generateHTML = async (store: Store) => {
    store.res.content =     /*html*/`
    <html lang="en" data-theme="business">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            
            <title>${store.page.title}</title>
            <link rel="icon" type="image/x-icon" href="/pub/favicon.ico">

            <meta name="description" content="${store.page.descr}">
            <head prefix="og: http://ogp.me/ns#">
            <meta property="og:type" content="article">
            <meta property="og:title" content="${store.page.title}">

            <link href="/pub/styles.css" rel="stylesheet" type="text/css" />

            <script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js" async defer></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pace-js@latest/pace-theme-default.min.css" async defer>

            <script src="https://apis.google.com/js/platform.js" async defer></script>
        </head>
        <body class="">
            ${await Header(store)}
            ${await FiltersBar()}
            <progress id="page-progress" class="progress progress-primary h-1 w-full rounded-none" value="30" max="100"></progress>
            ${await Alerts(store)}
            ${await Toasts(store)}
            <div class="px-16 mt-16">
                ${store.page.html}
            </div>
            ${await loginModal(store)}
            ${await freModal(store)}
            ${await Footer()}
        </body>
        <style>
            

        </style>
        <script>
            //--------------------------------------------------
            //  Define Store. The clientside context will be stored here 
            //--------------------------------------------------
            let store = {}

            //--------------------------------------------------
            //  Create a Map of the cookies for easy access
            //--------------------------------------------------
            const parseCookies = (cookieString) => {
                let cookiesMap = {}
                if (cookieString) {
                    let cookies = cookieString.split(';')
                    for (let cookie of cookies) {
                        let [name, value] = cookie.split('=')
                        cookiesMap[name.trim()] = value
                    }
                }
                return cookiesMap
            }

            store.cookies = parseCookies(document.cookie)
            console.log("Cookies :")
            console.log(JSON.stringify(store.cookies, null, 2))


            //--------------------------------------------------
            //  Trigger Client side actions based on cookie values
            //--------------------------------------------------

            
            if (store.cookies["D_TOAST_SUCCESS"]){
                document.cookie = "D_TOAST_SUCCESS=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                triggerToast("success", store.cookies["D_TOAST_SUCCESS"]);

            } 

            if (store.cookies['D_PAGE_RELOAD']) {
                // delete the cookie
                document.cookie = "D_PAGE_RELOAD=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                location.reload(true)
            }  
        </script>
    </html>
    `
}