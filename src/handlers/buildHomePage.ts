import { fetchAllPosts } from "../database";
import { Post, Store } from "../defs.js";
import {PostCard } from "../views/PostCard";

export const buildHomePage = async (store: Store) => {
    store.page.title = "Home Page";
    store.page.descr = "This is the Home page";

    const data = await fetchAllPosts(store);
    // console.log(data)

    let postsList = "";
    for (var item of data as Post[]) {
        postsList += await PostCard(item);
    }
    store.page.html = /*html*/ `
        <article class="">
    
            <div class="card card-compact -mx-5">
                <div class="card-body">
                    <div class="card-actions justify-between">

                        <div class="">
                            <span class="menu-title text-lg ">Hey there, where will you go today?</span>

                        </div>

                        <div class="dropdown dropdown-bottom dropdown-end">

                            <label tabindex="0" class="btn btn-base-300 justify-right border">Sorted By: Magic
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                        
                            </label>
                            <ul tabindex="0" class="dropdown-content z-10 menu p-2 shadow-xl rounded-box border bg-base-200 w-52">
                                <li><a class="active">Magic</a></li>
                                <li><a>Digs</a></li>
                                <li><a>Discussions</a></li>
                                <li><a>Trending</a></li>
                                <li><a>Latest</a></li>
                            </ul>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                ${postsList}
            </div>
        </article>
    `;
};
