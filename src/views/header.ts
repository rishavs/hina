import { Store } from "../defs";

export const Header = async (store: Store) => {
    return /*html*/ `
    <header class="navbar sticky top-0 bg-base-200 opacity-90 rounded-b-box lg:rounded-box border border-base-300 shadow-xl h-8 lg:h-20 z-10">
        <div class="navbar-start">
            <label for="left-drawer-trigger" class="btn btn-ghost drawer-button lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </label>
            <a class="btn btn-ghost p-0 lg:btn-lg text-2xl lg:text-4xl drop-shadow bg-gradient-to-r from-error to-warning text-transparent bg-clip-text" href="/">
                <div class="avatar">
                    <div class="w-12 lg:w-16">
                        <img src="/pub/logo.png" alt="logo" loading="lazy" decoding="async"/>
                    </div>
                </div>
                Digglu
            </a>
        </div>
        <div class="navbar-center">
        </div>

        <div class="navbar-end">
            ${store.req.cookies.D_UID ? 
            /*html*/`
            <a href="/p/new" class="btn btn-neutral mx-1">New Post</a>

            <div class="dropdown dropdown-end mx-1 ${store.req.cookies.D_UID ? "": "hidden" }">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="/pub/bm.png" />
                    </div>
                </label>
                <ul tabindex="0" class="z-20 mt-3 p-2 shadow menu lg:menu-lg dropdown-content bg-base-200 rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a onClick="signOut()">Logout</a></li>
                </ul>
            </div>` 
            : /*html*/`
            <!-- <button onClick="loginModal.showModal()" class="btn btn-neutral mx-1">Login</button> -->
            <div class="flex items-center lg:pr-4">
                <span class="hidden lg:block text-warning pr-2">Sign in with</span>
                <script src="https://accounts.google.com/gsi/client" async defer></script>
                <div id="g_id_onload"
                    data-client_id=${store.env.GOOGLE_KEY_ID}
                    data-context="signin"
                    data-ux_mode="redirect"
                    data-login_uri="${store.req.url.origin}/api/login/google?redirectTo=${encodeURIComponent(store.req.url.pathname)}"
                    data-nonce="noncy_drew"
                    data-skip_prompt_cookie="D_UID"
                    data-auto_prompt="true"
                    data-auto_select="true"
                    data-itp_support="true"
                    data-your_own_param_1_to_login="oogaboogo"
                    data-your_own_param_2_to_login="pingpong"
                >
                </div>
                
                <div class="g_id_signin"
                    data-type="icon"
                    data-shape="circle"
                    data-theme="outline"
                    data-text="signin_with"
                    data-size="large"
                    data-logo_alignment="left"
                    data-redirect_to="${encodeURIComponent(store.req.url.pathname)}"    

                >
                </div>
            </div>
            `
            }

        </div>
    </header>
    <script>
        let signOut = () => {
            window.localStorage.clear();
            document.cookie = "D_UID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            window.location.href = "/logout";
        }
    </script>
    `
}
