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
            <a class="btn modal-button bg-primary mx-1" href="https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=326093643211-dh58srqtltvqfakqta4us0il2vgnkenr.apps.googleusercontent.com&scope=openid%20email&redirect_uri=http://localhost:3000/oauth/google/callback&state=security_token%3D138r5719ru3e1%26url%3Dhttps%3A%2F%2Foauth2-login-demo.example.com%2FmyHome&nonce=0394852-3190485-2490358">Google Sign in</a>
            <label for="loginModal" class="btn modal-button bg-secondary mx-1">Login</label>
            <div class="dropdown dropdown-end mx-1">
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
