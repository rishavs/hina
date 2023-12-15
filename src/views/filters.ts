export const Filters = () => {
    return /*html*/ `
    <div class="h-20 items-center flex justify-between">

        <div class="dropdown dropdown-bottom">
            <label tabindex="0" class="btn btn-ghost ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 lg:w-6 lg:h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                </svg>
                <span>All</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>                     
            </label>
            <ul tabindex="0" class="dropdown-content z-10 menu p-4 shadow-xl rounded-box border border-base-300 bg-base-100 w-52 gap-1 lg:gap-2">
                <li><a class="active">All</a></li>
                <li><a>Meta</a></li>
                <li><a>Science & Tech</a></li>
                <li><a>Gaming</a></li>
                <li><a>World News</a></li>
                <li><a>Sports</a></li>
                <li><a>Business</a></li>
                <li><a>Lifestyle</a></li>
                <li><a>Entertainment</a></li>
                <li><a>Funny</a></li>
                <li><a>Cute Stuff</a></li>
        
                <li><a>Everything Else</a></li>
            </ul>
        </div>

        <span class="hidden lg:block">Hey Dingbat, what will you dig up today?</span>

        <div class="dropdown dropdown-bottom dropdown-end">
            <label tabindex="0" class="btn btn-ghost ">
            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>
                <span>Magic</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </label>
            <ul tabindex="0" class="dropdown-content z-10 menu p-4 shadow-xl rounded-box border border-base-300 bg-base-100 w-52">
                <li><a class="active">Magic</a></li>
                <li><a>Digs</a></li>
                <li><a>Discussions</a></li>
                <li><a>Trending</a></li>
                <li><a>Latest</a></li>
            </ul>
        </div>
    </div>
    `;
}