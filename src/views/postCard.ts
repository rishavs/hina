// export const postCard = async (post) => {
//     return /*html*/`
//     <li> <a href="/p/${post.id}">${post.title}</a></li>
//     `
// }

import { Post } from "../defs";

export const PostCard = (post: Post) => {
    return /*html*/ `
    <!-- Post Card -->
    <article class="flex rounded-btn bg-neutral border border-black">

        <!-- Dig Btn section-->
        <div class="flex-none flex flex-col justify-between w-12 lg:w-20 gap-1 lg:gap-2 pr-1 lg:pr-2">
            <button class="grow btn btn-warning  lg:btn-lg rounded-bl-none rounded-tr-none flex flex-col gap-1 p-0 lg:p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" class="w-4 h-4 lg:w-6 lg:h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>
                
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                <!-- <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" class="w-4 h-4 lg:w-6 lg:h-6 ">
                    <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
                </svg> -->

                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                <!-- <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" class="w-4 h-4 lg:w-6 lg:h-6 stroke-error">

                        <path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z"/>
                </svg> -->

                <span>9999</span> 


            </button>

            <button class="btn btn-xs lg:btn-md rounded-br-none rounded-tl-none "> 
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
                    <div class=" w-20 lg:w-36 border border-base-300">
                        <img src="https://picsum.photos/seed/${post.slug}/200/300" alt="" loading="lazy" decoding="async"/>
                    </div>
                </div>

                <div class="flex flex-col justify-between w-full pt-2 lg:pt-4">
                
                    <p class=" line-clamp-2 pl-2 pr-1 lg:px-4 pb-1 lg:pb-0 text-sm lg:text-lg">
                        <span class="inline-flex items-baseline">
                            <img src="https://picsum.photos/seed/${post.slug}/100/100" class="h-5 lg:h-7 w-5 lg:w-7 self-center rounded-md border border-base-100" alt="" loading="lazy" decoding="async"/>
                            <span>&nbsp</span>
                        </span>
                        <a href="/p/${post.slug}" class="leading-relaxed lg:leading-loose text-neutral-content">R${post.title}</a>
                    </p>

                    <div class="flex items-center justify-between gap-0 lg:gap-4 pl-2 lg:pl-4">
                        <div class="flex justify-start items-center gap-2">
                            <button class=" hidden btn btn-sm lg:btn-md lg:inline-flex items-center rounded-b-none">
                                <div class="avatar">
                                    <div class="w-5 lg:w-7 rounded-full ">
                                    <img src="https://picsum.photos/seed/11/100/100" alt="" loading="lazy" decoding="async" />
                                    </div>
                                </div>
                                Lord Dingus
                            </button>
                            <span class="flex gap-1 lg:gap-2 text-xs lg:text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 lg:w-6 lg:h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                12 hr 
                            </span>

                        </div>
                        <div class="flex items-end">
                            
                            <button class="btn btn-xs lg:btn-md rounded-r-none rounded-b-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                            </button>
                            <button class="btn btn-xs lg:btn-md rounded-none rounded-tr-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                                </svg>
                            </button>
                                        
                            <button class="btn btn-xs lg:btn-md ml-1 lg:ml-2 btn-primary rounded-none rounded-br-md rounded-tl-btn w-16 lg:w-36 p-0 border border-base-100">
                                <span>9.9k</span>
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
