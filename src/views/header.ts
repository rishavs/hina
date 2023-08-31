import { Store } from "../defs.js";

export const Header = async (store: Store) => /*html*/ `
    <div class="navbar bg-primary px-16">
        <div class="navbar-start">
            <button class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <a class="btn btn-ghost normal-case text-xl" href="/">Digglu</a>
        </div>
        <div class="navbar-center">
        </div>
        
        <div class="navbar-end">
            ${store.req.cookies.D_UID ? 
            /*html*/`
            <a href="/p/new" class="btn modal-button bg-secondary mx-1">New Post</a>

            <button class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span class="badge badge-xs badge-secondary indicator-item"></span>
                </div>
            </button>
            <div class="dropdown dropdown-end mx-1 ${store.req.cookies ? "": "hidden" }">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="/pub/bm.png" />
                    </div>
                </label>
                <ul tabindex="0" class="z-10 mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
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
            <button onClick="loginModal.showModal()" class="btn modal-button bg-secondary mx-1">Login</button>
            `
            }

        </div>
    </div>


`
