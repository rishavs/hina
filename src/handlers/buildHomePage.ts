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
        <div class="">
            ${Filters()}
       
            <div class="flex flex-col lg:gap-4 gap-1">
                ${postsList}
            </div>

            <div class="flex justify-between h-20 items-center">
                <button class="btn">Prev</button>
                <div class="join">
                    <button class="join-item btn">1</button>
                    <button class="join-item btn btn-active">2</button>
                    <button class="join-item btn">3</button>
                    <button class="join-item btn">4</button>
                </div>
                <button class="btn">Next</button>
            </div>

        </div>
    `;
};
