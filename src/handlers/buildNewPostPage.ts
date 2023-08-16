import { Store } from "../defs"

export const buildNewPostPage = async (store: Store) => {
    store.page.title = "META: New Post Page"
    store.page.descr = "META: This is the about page"
    store.page.html = /*html*/ `
        <article class="min-h-screen">
            <h1>New Post Page</h1>
        </article>
        `
}