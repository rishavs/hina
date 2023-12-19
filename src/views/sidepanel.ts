import { fetchAllPosts } from "../database"
import { Post, Store } from "../defs"

export const SideCard = async (store: Store) => {

    const data = await fetchAllPosts(store)
    let postsList = ""
    for (var post of data as Post[]) {
        postsList += /*html*/ `<li>
            <a href="/p/${post.slug}">                                
                <div class="flex flex-col p-2 bg-warning rounded">
                    <span class="countdown text-warning-content">
                        <span style="--value:${post.digs_count};"></span>
                    </span>
                </div>
                <span class="line-clamp-2 items-center text-neutral-content">
                    <span class="badge badge-sm mx-1">Tech</span>
                    <span class="text-sm prose prose-sm max-w-none"> ${post.title}</span>
                </span>
            </a>
        </li>`
    }


    return /*html*/ `
    <ul class="menu border border-black shadow-xl bg-neutral rounded-lg mr-12 divide-y divide-base-300">
        <li class="menu-title">Top 10 Posts</li>
        ${postsList}
    </ul>
   `
}
