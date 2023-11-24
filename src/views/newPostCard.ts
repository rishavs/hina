// export const postCard = async (post) => {
//     return /*html*/`
//     <li> <a href="/p/${post.id}">${post.title}</a></li>
//     `
// }

import { Post } from "../defs";

export const NewPostCard = () => {
  return /*html*/ `
    <article>
        <div class="card card-side card-compact text-accent-content w-full h-32 bg-base-200 gap-2">

            <button class="btn btn-warning h-auto w-16 rounded-r-none">
                <div class="flex flex-col gap-3 rounded-box p-2">
                    <span class="countdown self-center text-xl">
                    <span style="--value:15;"></span>
                    </span>
                    Digs
                </div>
            </button>

            <div class="avatar">
                <div class="w-32 rounded-md">
                    <img src="https://picsum.photos/seed/11/600/600" alt="thumb" />
                </div>
            </div>

            <div class="card-body">
                <h1 class="card-title line-clamp-2 text-base">
                    <span class="inline-flex items-baseline">
                    <img src="https://picsum.photos/seed/11/100/100" alt="" class="h-6 w-6 self-center rounded-sm" />
                    <span>&nbsp;</span>
                    </span>
                    Etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras
                </h1>

                <div class="card-actions justify-between gap-2 border-t pt-3 text-xs">
                    <div class="flex">
                        <span class="mr-2 inline-flex items-center gap-2">
                            <img src="https://picsum.photos/seed/11/100/100" alt="" class="h-6 w-6 self-center rounded-full" />
                            <span>Lord Dingus Berry</span>
                        </span>

                        <span class="mr-2 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            12 hours ago
                        </span>
                    </div>

                    <div class="">
                        <button class="btn btn-xs">Save</button>
                        <button class="btn btn-xs">Report</button>
                        <button class="btn btn-xs">Share</button>
                        <button class="btn btn-xs">...</button>
                    </div>
                </div>
            </div>

            <button class="btn bg-base-300 h-auto w-16 flex-col rounded-l-none p-2">
                <p>32</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
            </button>
        </div>
    </article>

    `;
};
