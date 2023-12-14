import { Store } from "../defs";

export const Header = async (store: Store) => {
    return /*html*/ `
    <header class="navbar bg-neutral lg:rounded-box lg:shadow-xl h-20 py-4">
        <div class="navbar-start">
            <label for="left-drawer-trigger" class="btn btn-square btn-ghost drawer-button lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </label>
            <a class="btn btn-ghost drop-shadow text-3xl bg-gradient-to-r from-error to-warning inline-block text-transparent bg-clip-text" href="/">Digglu</a>
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
            
            <button onClick="loginModal.showModal()" class="btn btn-error mx-1">Login</button>
            `
            }

        </div>
    </header>
    `
}
