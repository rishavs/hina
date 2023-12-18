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
            <article name="article" class="bg-neutral rounded-box w-full shadow-xl">
                    <figure class=""><img src="https://picsum.photos/seed/picsum/500/300" class="lg:rounded-t-box w-full object-cover" alt="Shoes"/></figure>
                    <div class="flex flex-col px-4 lg:px-8">
                        
                        <div class="flex gap-2 lg:gap-4 py-2 lg:py-4">                    
                            
                            <p class="self-top line-clamp-3 font-medium text-lg lg:text-2xl">
                                <span class="inline-flex items-baseline">
                                    <img src="https://picsum.photos/seed/11/100/100" alt="" class="w-4 h-4 lg:w-8 lg:h-8 rounded mx-1" />
                                </span>
                                <a href="/p/${post.slug}" class="">T${post.title}</a>
                            </p>

                        </div>

                        <div class="flex justify-between py-2 lg:py-4 border-t border-base-300">      
                            <div class="join">      
                                <button class="btn btn-warning join-item">                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" class="w-4 h-4 lg:w-6 lg:h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                                    </svg>
                                    <span>9909</span>
                                <button>
                                <button class="btn join-item"> 
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden lg:block w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                                        </svg>
                                        Tech
                                    </div>
                                </button>
                            </div>
                            <button class="btn relative flex w-36 items-center overflow-hidden shadow-lg">
                                <img class="absolute -left-2 w-12 rounded-r-full shadow-lg" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                                <div class="w-36 pl-8">
                                    <div class="truncate text-xs font-bold">Andrew Alfred</div>
                                    <div class="truncate text-xs font-light">12 hrs ago</div>
                                </div>
                            </button>
                        </div>

                        <div class="py-2 lg:py-4 border-t border-base-300">                            
                            <p class="prose lg:prose-lg max-w-none">
                                R${post.content}
                            </p>
                        </div>
                        <div class="flex justify-end py-2 lg:py-4 border-t border-base-300">
                            <button class="btn btn-error btn-outline btn-sm ">
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
            </article>
        </section>
        <section name="comments">
            ${await CommentsTree()}
        </section>
    </div>

`;
};