import { fetchSpecificPostById } from "../database";
import { Store, Post } from "../defs";
import { CommentsTree } from "../views/commentsTree";
import { Filters } from "../views/filters";

export const buildPostDetailsPage = async (store: Store) => {
    store.page.title = `Post Page`;
    store.page.descr = `This is the Post - ${store.req.slug}`;

    const result = await fetchSpecificPostById(store);
    if (result.size == 0) {
        let err = new Error();
        err.message = "404";
        err.cause = "this id doesn't exists in the db";
        throw err;
    }

    let post = result.rows[0] as Post;
    console.log(post);

    store.page.html = /*html*/ `
    <div class="flex flex-col gap-4">
        <section>
            ${Filters()}
            <article name="article" class="">
                <div class="rounded-box w-full bg-base-100 shadow-xl">
                    <figure class=""><img src="https://picsum.photos/seed/picsum/500/300" class="lg:rounded-t-box w-full object-cover" alt="Shoes"/></figure>
                    <div class="flex flex-col gap-2 px-4 py-4 lg:px-6 ">
                        <div class="flex gap-2 lg:gap-4">                    

                            <div class="flex-none flex flex-col justify-between w-12 lg:w-20 gap-1 lg:gap-2 pr-1 lg:pr-2">
                            
                                <button class="grow btn btn-warning lg:btn-lg rounded-b-none flex flex-col gap-1 p-0 lg:p-2">
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
                    
                                <button class="btn btn-xs lg:btn-md rounded-t-none"> 
                                    <div class="flex items-center">
                                    
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden lg:block w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                                        </svg>
                                        Tech
                                    </div>
                                </button>
                            </div>

                            <p class="self-center line-clamp-3 font-semibold text-sm lg:text-2xl lg:leading-relaxed">
                                <span class="inline-flex items-baseline">
                                    <img src="https://picsum.photos/seed/11/100/100" alt="" class="self-center w-4 h-4 lg:w-8 lg:h-8 rounded mx-1" />
                                    <span>🔗</span>
                                </span>
                                <a href="/p/${post.slug}" class="">T${post.title}</a>
                            </p>

                        </div>
                        <div class="card-actions flex justify-between py-2 border-b items-center">

                            <div class="flex gap-2">

                                <button class="btn btn-sm btn-warning lg:btn-md ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" class="w-4 h-4 lg:w-6 lg:h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                                    </svg>
                                    <span>9999</span> 
                                </button>
                                <button class=" btn btn-sm lg:btn-md lg:inline-flex items-center rounded-b-none w-16">
                                    <div class="avatar">
                                        <div class="w-5 lg:w-7 rounded-full ">
                                        <img src="https://picsum.photos/seed/11/100/100" alt="" loading="lazy" decoding="async" />
                                        </div>
                                    </div>
                                    <span class="text-ellipsis overflow-hidden">Lord Dingus</span>
                                </button>
                            </div>

                            <div class="btn btn-sm btn-disabled">12 hr</div>
                        </div>

                        <button class=" btn btn-sm lg:btn-md lg:inline-flex items-center rounded-b-none">
                        <div class="avatar">
                            <div class="w-5 lg:w-7 rounded-full ">
                            <img src="https://picsum.photos/seed/11/100/100" alt="" loading="lazy" decoding="async" />
                            </div>
                        </div>
                        Lord Dingus
                    </button>

                        <p class="prose prose-sm lg:prose-lg max-w-none py-2">
                            <span class="text-xs">[ 12 hrs ago ]</span>
                            R${post.content}</p>

                        <div class="pt-4 border-t flex justify-end gap-2">
                            <button class="btn btn-error btn-outline btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                                </svg>
                                Reply
                            </button>
                            <button class="btn btn-ghost btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                </svg>
                            </button>
                            <button class="btn btn-ghost btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                            </button>
                            <button class="btn btn-ghost btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                                </svg>
                            </button>

                            <button class="btn btn-ghost btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section name="comments">
            ${await CommentsTree()}
        </section>
    </div>

`;
};