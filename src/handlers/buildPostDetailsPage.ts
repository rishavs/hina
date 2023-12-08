import { fetchSpecificPostById } from "../database";
import { Store, Post } from "../defs";
import { CommentsTree } from "../views/commentsTree";

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
            <article name="article" class="">
                <div class="rounded-box w-full bg-base-100 shadow-xl">
                    <figure class=""><img src="https://picsum.photos/seed/picsum/500/300" class="lg:rounded-t-box w-full object-cover" alt="Shoes"/></figure>
                    <div class="flex flex-col gap-2 px-4 py-4 lg:px-6 ">
                        <div class="flex gap-4 lg:gap-4">                    
                            <button class="btn btn-warning w-12 h-16 lg:w-20 lg:h-28 "
                            onClick="console.log(this.children[0].children[0].children[0].style.cssText = '--value:90;');"
                        >
                                <div class="flex flex-col gap-3 rounded-box">
                                    <span class="countdown self-center lg:text-xl">
                                    <span style="--value:${post.digs_count};"></span>
                                    </span>
                                    <p class="text-xs lg:text-base">Digs</p>
                                </div>
                            </button>
                            <p class="self-center line-clamp-3 font-semibold text-sm lg:text-2xl lg:leading-relaxed">
                                <span class="inline-flex items-baseline">
                                    <img src="https://picsum.photos/seed/11/100/100" alt="" class="self-center w-4 h-4 lg:w-8 lg:h-8 rounded mx-1" />
                                    <span>🔗</span>
                                </span>
                                <a href="/p/${post.slug}" class="">T${post.title}</a>
                            </p>
                            <!-- <div class="prose prose-sm lg:prose-lg max-w-none">
                                <h3 class="line-clamp-3">
                                <span class="badge badge-xs badge-outline p-0 m-0">
                                    <img class="w-5 h-5 rounded" src="https://picsum.photos/seed/11/100/100" alt="" loading="lazy" decoding="async" />

                                </span>
                                    <a href="/p/${post.slug}">${post.title}</a>
                                </h3>
                            </div> -->


                        </div>
                        <div class="card-actions flex justify-between py-2 border-b items-center">

                            <div class="flex gap-4">
                                <a class="btn border">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 -mr-1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                                    </svg>
                                    <span class="">Tech</span>
                                </a>

    

                                <button class="btn btn-ghost btn-xs lg:btn-md">
                                    <div class="avatar">
                                        <div class="w-6 lg:w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                                            <img src="https://picsum.photos/seed/11/100/100" alt="" loading="lazy" decoding="async" />
                                        </div>
                                    </div>
                                Lord Dingus Berrius
                                </button>
                            </div>

                            <div class="badge badge-xs lg:badge-lg">[ 12 hours ago ]</div>
                        </div>

                        <p class="prose prose-sm lg:prose-lg max-w-none py-2">
                        <button class="btn btn-ghost btn-xs lg:btn-sm inline-flex items-baseline">
                        <div class="avatar">
                            <div class="w-4 rounded-full ">
                                <img src="https://picsum.photos/seed/11/100/100" alt="" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    Lord Dingus Berrius :
                    </button>
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