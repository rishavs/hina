// export const postCard = async (post) => {
//     return /*html*/`
//     <li> <a href="/p/${post.id}">${post.title}</a></li>
//     `
// }

import { Post } from "../defs";

export const PostCard = (post: Post) => {
  return /*html*/ `
    <article>
        <div class="card card-side card-compact text-accent-content w-full h-20 gap-2 lg:gap-2 lg:h-28 bg-base-200 shadow hover:bg-base-100">

            <button class="btn btn-warning h-auto w-10 lg:w-16 rounded-none lg:rounded-l-lg"
                onClick="console.log(this.children[0].children[0].children[0].style.cssText = '--value:90;');"
            >
                <div class="flex flex-col gap-3 rounded-box">
                    <span class="countdown self-center lg:text-xl">
                    <span style="--value:${post.digs_count};"></span>
                    </span>
                    <p class="text-xs lg:text-base">Digs</p>
                </div>
            </button>

            <div class="avatar">
                <div class="w-16 lg:w-32 rounded-md">
                    <img src="${post.thumb}" alt="thumb" loading="lazy" decoding="async" />
                </div>
            </div>

            <div class="flex flex-col justify-between w-full pt-2 px-1 lg:px-2 lg:divide-y">

                <h1 class="card-title line-clamp-2 text-xs lg:text-base ">
                    <span class="inline-flex items-baseline">
                        <img src="https://images.unsplash.com/photo-1550510537-89d5433de5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" class="h-5 w-5 self-center rounded-md" />
                        <span>&nbsp</span>
                    </span>
                    <a href="/p/${post.slug}">${post.title}</a>
                </h1>

                <div class="card-actions flex justify-between gap-2 pb-2 lg:py-2 text-xs">
                
                    <div class="flex gap-x-4">
                        <button class="btn btn-error btn-ghost btn-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 -mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                            </svg>
                            <span>Tech</span>
                        </button>

                        <span class="hidden lg:inline-flex items-center gap-2">
                            <img src="https://picsum.photos/seed/11/100/100" alt="" class="h-6 w-6 self-center rounded-full" loading="lazy" decoding="async" />
                            <button class="btn btn-ghost btn-xs"> Lord Dingus Berry</button>
                        </span>

                        <span class="hidden lg:flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            12 hours ago
                        </span>
                    </div>

                    <div>
                        <button class="btn btn-ghost btn-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        </button>
                        <button class="btn btn-ghost btn-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>

            <button class="btn btn-neutral h-auto w-10 lg:w-16 rounded-none lg:rounded-r-lg text-neutral-content">
                <div class="flex flex-col gap-3 rounded-box">
                    <span class="countdown self-center lg:text-xl ">
                        <span style="--value:${post.comments_count};"></span>
                    </span>
                    <p class="text-xs lg:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 lg:h-6 lg:w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                    </p>
                </div>
            </button>
        </div>
    </article>

    `;
};
