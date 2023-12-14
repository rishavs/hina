// export const postCard = async (post) => {
//     return /*html*/`
//     <li> <a href="/p/${post.id}">${post.title}</a></li>
//     `
// }

import { Post } from "../defs";

export const PostCard = (post: Post) => {
    return /*html*/ `
    <!-- Post Card -->
    <article class="flex lg:rounded-btn bg-neutral border border-black">

        <!-- Dig Btn section-->
        <div class="flex-none flex flex-col justify-between w-12 lg:w-24 gap-1 lg:gap-2 pr-1 lg:pr-2">
            <button class="grow btn btn-warning  btn-sm lg:btn-lg p-2 rounded-none rounded-br-md lg:rounded-tl-btn flex flex-col">
                <p>999</p> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 lg:w-6 lg:h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>

            </button>

            <button class="btn  btn-sm lg:btn-md rounded-b-none rounded-l-none "> 
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden lg:block w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                    </svg>
                    Tech
                </div>
            </button>
        </div>

        <!-- Post Content Section -->
        <div class="grow flex flex-col">
            <div class="flex">
                <div class="avatar">
                    <div class=" w-16 lg:w-24 border border-base-300">
                        <img src="https://picsum.photos/seed/${post.slug}/200/300" />
                    </div>
                </div>

                <div class="flex flex-col justify-between w-full">
                
                    <div class="flex items-center justify-between py-1 lg:pt-2 lg:pb-1 px-2 lg:px-4">
                        <span class="pr-8 text-xs lg:text-sm"> 12 hours ago </span>
                        <span> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 lg:w-6 lg:h-6 stroke-warning">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                            </svg>
                        </span>
                    </div>
                    <p class="lg:font-medium line-clamp-2 px-2 pb-1 lg:pb-2 text-sm lg:text-lg">
                        <span class="inline-flex items-baseline">
                            <img src="https://picsum.photos/seed/${post.slug}/100/100" alt="" class="h-5 lg:h-7 w-5 lg:w-7 self-center rounded-md border border-base-100" />
                            <span>&nbsp</span>
                        </span>
                        <a href="/p/xxx" class="lg:leading-relaxed text-neutral-content">R${post.title}</a>
                    </p>

                    <div class="flex items-center justify-end lg:justify-between gap-0 lg:gap-2 pl-2">
                        <button class=" hidden btn   btn-sm lg:btn-md lg:inline-flex items-center rounded-b-none">
                            <div class="avatar">
                                <div class="w-5 lg:w-7 rounded-full ">
                                <img src="https://picsum.photos/seed/11/100/100" alt="" loading="lazy" decoding="async" />
                                </div>
                            </div>
                            Lord Dingus
                        </button>
                        <div class="flex lg:gap-2">
                            <button class="btn   btn-sm lg:btn-md rounded-r-none rounded-b-none">
                                <span class="hidden lg:block">99</span> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                            </button>
                            <button class="btn   btn-sm lg:btn-md rounded-none">
                                <span class="hidden lg:block">99</span> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                                </svg>
                            </button>
                                        
                            <button class="btn   btn-sm lg:btn-md btn-primary rounded-none lg:rounded-br-md w-16 lg:w-24 p-0">
                                <span>99</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>


    `;
};
