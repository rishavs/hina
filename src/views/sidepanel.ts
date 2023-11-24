import { fetchAllPosts } from "../database"
import { Post, Store } from "../defs"

export const SideCard = async (store: Store) => {

    const data = await fetchAllPosts(store)
    let postsList = ""
    for (var post of data as Post[]) {
        postsList += `<li>
            <a>                                
                <div class="flex flex-col p-2 bg-warning rounded text-accent-content">
                    <span class="countdown">
                        <span style="--value:${post.digs_count};"></span>
                    </span>
                </div>
                <span class="line-clamp-2 items-center ">
                    <span class="badge badge-sm mx-1">Tech</span>
                    <span class="text-sm text-neutral-content"> ${post.title}</span>
                </span>
            </a>
        </li>`
    }


    return /*html*/ `
    <ul class="menu bg-neutral rounded-lg my-4 mr-12">
        <li class="menu-title text-base-100">Top 10 Posts</li>
        ${postsList}
    </ul>

    `
}
