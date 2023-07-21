import { fetchAllPosts } from "../database"
import { buildHTML } from "../views/buildHTML"


export const showHomePage = async (request, env, ctx) => {
    let headers = new Headers(
        { "Content-Type": "text/html; charset=UTF-8" },
        { "Powered-by": "VIEW: Pika Pika Pika Choooo" }
    )
    let store = {
        page: {
            title: "Home Page",
            descr: "Home Page",
            path: "/",
        },
        user: {},
    }
    store.page.title = "META: Home Page"
    store.page.descr = "META: This is the Home page"

    const data = await fetchAllPosts(env)

    let postsList = ""
    for (var item of data) {
        postsList += `<li><a class="link" href="/p/${item.id}">${item.title}</a></li>\n`
    }


    store.page.content = /*html*/ `
        <article class="min-h-screen">
        <h1> HOME PAGE</h1>
        <ol> ${postsList} </ol>
    </article>
    `

    let html = await buildHTML(store)
    return new Response(html, { status: 200, headers: headers })
}