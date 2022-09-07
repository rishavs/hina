export const Header = () => /*html*/ `
    <nav class="navbar bg-primary px-16">
        <div class="navbar-start">
            <button class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <a class="btn btn-ghost normal-case text-xl" href="/">Digglu</a>
            <a class="text-xl" href="/post/13">Post 13</a>
        </div>
        <div class="navbar-center">
            <div class="form-control max-w-full">
                <input type="text" placeholder="Search" class="input input-bordered" />
            </div>
        </div>
        <div class="navbar-end">
            <label for="loginModal" class="btn modal-button bg-secondary">Login</label>
            <div class="dropdown dropdown-end mx-2">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="/pub/bm.png" />
                    </div>
                </label>
                <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </nav>


`
