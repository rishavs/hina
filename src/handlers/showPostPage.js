import { fetchPostById } from "../database"
import { buildHTML } from "../views/buildHTML"

export const showPostPage = async (request, env, ctx) => {
    let headers = new Headers(
        { "Content-Type": "text/html; charset=UTF-8" },
        { "Powered-by": "VIEW: Pika Pika Pika Choooo" }
    )
    let url = new URL(request.url)
    let id = url.pathname.split("/")[2]

    let store = {
        page: {
            title: "Post Page",
            descr: "Post Page with id: " + id,
            path: url.pathname,
        },
        user: {},
    }

    const data = await fetchPostById(env, id)
    store.page.content = /*html*/ `
        <article class="min-h-screen">
            <h2>${data[0].id}</h2>
            <h2>${data[0].title}</h2>
            <p>${data[0].description}</p>
        </article>  
    `
    let html = await buildHTML(store)
    return new Response(html, { status: 200, headers: headers })
}