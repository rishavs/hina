import { Store } from "../defs";

export const Header = async (store: Store) => {
    return /*html*/ `
    <header class="navbar sticky top-0 bg-neutral lg:rounded-btn border border-base-300 shadow-xl h-8 lg:h-20 z-10">
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
            <a href="/p/new" class="btn btn-error mx-1">New Post</a>

            <div class="dropdown dropdown-end mx-1 ${store.req.cookies.D_UID ? "": "hidden" }">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="/pub/bm.png" />
                    </div>
                </label>
                <ul tabindex="0" class="z-20 mt-3 p-2 shadow menu menu-lg lg:menu-md dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>` 
            : /*html*/`
            
            <button onClick="loginModal.showModal()" class="btn lg:btn-lg btn-error mx-1">Login</button>
            `
            }

        </div>
    </header>
    `
}
