import { fetchAllPosts } from "../database"
import { Post, Store } from "../defs"

export const SideCard = async (store: Store) => {

    const data = await fetchAllPosts(store)
    let postsList = ""
    for (var post of data as Post[]) {
        postsList += `<li>
            <a href="/p/${post.slug}">                                
                <div class="flex flex-col p-2 bg-warning rounded text-accent-content">
                    <span class="countdown">
                        <span style="--value:${post.digs_count};"></span>
                    </span>
                </div>
                <span class="line-clamp-2 items-center text-neutral-content">
                    <span class="badge badge-sm mx-1">Tech</span>
                    <span class="text-sm"> ${post.title}</span>
                </span>
            </a>
        </li>`
    }


    return /*html*/ `
    <div class="card">
        <ul class="menu bg-neutral rounded-lg my-4 mr-12 divide-y-[0.1px] divide-current">
            <li class="menu-title text-base-100">Top 10 Posts</li>
            ${postsList}
        </ul>
    </div>

    `
}
