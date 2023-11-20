// export const postCard = async (post) => {   
//     return /*html*/`
//     <li> <a href="/p/${post.id}">${post.title}</a></li>
//     `
// }

import { Post } from "../defs"


export const PostCard = (post: Post) => {
    return /*html*/ `
    <tr class="hover:shadow">
      <td>
        <div class="flex h-16 lg:h-28  space-x-2 -mx-8 lg:-mx-2 ">
          <button class="btn btn-primary btn-xs h-full w-12 lg:w-16 rounded-none lg:rounded lg:rounded-r-none py-1 flex-col">
            <span class="font-bold text-lg">${post.digs_count}</span>
            <span class="border-t-1">Digs</span>
          </button>

          <div class="avatar">
            <div class="h-full w-16 lg:w-28 lg:mr-2 rounded">
              <img src="${post.thumb}" loading="lazy" decoding="async" />
            </div>
          </div>

          <div class="">
            <h3 class="line-clamp-2 items-center font-bold min-h-8">
              <span> ${post.title} </span>
            </h3>

            <p class=" hidden opacity-50 lg:line-clamp-2 m-0 lg:my-1">${post.content}</p>

            <p class="mt-1 line-clamp-1">

              <span class="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                </svg>
                <span class="opacity-80 text-xs">Tech</span>
                <span class="ml-2 text-xs opacity-70">•</span>

              </span>
              
              <span class="inline-flex items-center">
                <img src="https://picsum.photos/100" loading="lazy" decoding="async" alt="" class="mx-2 h-5 w-5 self-center rounded" />
                <span class="opacity-80 text-xs">somesite.com</span>
                <span class="ml-2 text-xs opacity-70">•</span>
              </span>

              <span class="inline-flex items-center">
                <img src="https://picsum.photos/100" loading="lazy" decoding="async" alt="" class="mx-2 h-5 w-5 self-center rounded-full" />
                <span class="opacity-80 text-xs">Lord Dingle Wingle Berry</span>
                <span class="ml-2 text-xs opacity-70">•</span>
                
              </span>

              <span class="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-2 opacity-80  h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            
                <span class="opacity-80 text-xs">12 hrs ago</span>
              </span>

            </p>
          </div>

          <button class="btn h-full w-12 lg:w-16 rounded-none lg:rounded-md rounded-l-none p-2 flex-col">
            <p>${post.comments_count}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
    `
}