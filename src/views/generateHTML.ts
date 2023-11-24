import { Header } from "./header";
import { LoginModal } from "./loginModal";
import { FREModal } from "./freModal";
import { Footer } from "./footer";
import { Store } from "../defs";
import { Alerts } from "./alerts";
import { Toasts } from "./toasts";
import { Drawer } from "./drawer";
import { Floaters } from "./floater";
import { SideCard } from "./sidepanel";
import { PostCard } from "./postCard";


export const generateHTML = async (store: Store) => {
    store.res.content =     /*html*/`
    <!DOCTYPE html>
    <html lang="en" data-theme="aquafina">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            
            <title>${store.page.title}</title>
            <link rel="icon" type="image/x-icon" href="/pub/favicon.ico">

            <head prefix="og: http://ogp.me/ns#">
            <meta property="og:type" content="article">
            <meta property="og:title" content="${store.page.title}">
            <meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
            <meta property="og:locale" content="en_GB" />
            <meta property="og:url" content="">
            <meta property="og:image" content="">
            
            <meta property="og:image:width" content="1200">
            <meta property="og:image:height" content="630">
            <meta property="og:image:alt" content="Get from SEO newbie to SEO pro in 8 simple steps.">
            <meta property="og:video:type" content="video/mp4">
            <meta property="og:video:width" content="640">
            <meta property="og:video:height" content="360">

            <meta name="description" content="${store.page.descr}">
            <meta name="keywords" content="">
            <meta name="author" content="">
            
            <link href="/pub/styles.css" rel="stylesheet" type="text/css" />

        </head>
        <body class="">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        ${await Header(store)}

        <main class="min-h-screen lg:px-12">

            <div class="drawer lg:drawer-open">
                <input id="left-drawer-trigger" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <div class="flex">
                    
                        <div class = "min-w-xs w-full lg:basis-2/3 flex flex-col ">
                            
                            ${store.page.html}

                        </div>
                        <div class = "basis-1/3 hidden lg:block">
                            ${await SideCard(store)}
                            ${await SideCard(store)}
                        </div>      
                    </div> 
                </div> 
                ${await Drawer()}
                ${await LoginModal(store)}
                ${await FREModal(store)}
                ${await Alerts(store)}
                ${await Toasts(store)}
            </div>
        </main>

        ${await Footer()}
        ${await Floaters()}
    
        <script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js" async defer></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pace-js@latest/pace-theme-default.min.css" async defer>
        
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
            if (store.cookies['D_PAGE_RELOAD']) {
                // delete the cookie
                document.cookie = "D_PAGE_RELOAD=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                location.reload(true)
            }  else if (store.cookies["D_TOAST_SUCCESS"]){
                document.cookie = "D_TOAST_SUCCESS=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                triggerToast("success", store.cookies["D_TOAST_SUCCESS"]);
            } else if (store.cookies["D_MODAL_FRE"]){
                document.cookie = "D_MODAL_FRE=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                freModal.showModal();
            } 
        </script>
    </html>
    `
}
