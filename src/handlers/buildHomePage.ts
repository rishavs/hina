import { fetchAllPosts } from "../database";
import { Post, Store } from "../defs";
import { Filters } from "../views/filters";
import { PostCard } from "../views/postCard";

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
            ${Filters()}
       
            <div class="flex flex-col lg:gap-4 gap-1">
                ${postsList}
            </div>
        </article>
    `;
};
