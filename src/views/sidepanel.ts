import { fetchAllPosts } from "../database"
import { Post, Store } from "../defs"

export const SideCard = async (store: Store) => {

    const data = await fetchAllPosts(store)
    let postsList = ""
    for (var post of data as Post[]) {
        postsList += `<li>
            <a>                                
                <div class="rounded w-10 h-10 bg-primary p-2  font-bold">${post.digs_count}</div>

                <span class="line-clamp-2 items-center ">
                    <span class="badge badge-sm mx-1">Tech</span>
                    <span class="text-sm"> ${post.title}</span>
                </span>
            </a>
        </li>`
    }


    return /*html*/ `
    <ul class="menu bg-secondary rounded-box mb-6 menu-md">
        <li class="menu-title">Top 10 Posts</li>
        ${postsList}
    </ul>

    `
}
