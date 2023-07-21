import { buildHTML } from "../views/buildHTML.js"

export const showAboutPage = async (request, env, ctx) => {
    let headers = new Headers(
        { "Content-Type": "text/html; charset=UTF-8" },
        { "Powered-by": "VIEW: Pika Pika Pika Choooo" }
    )
    let store = {
        page: {},
        user: {},
    }
    store.page.title = "META: About Page"
    store.page.descr = "META: This is the about page"
    store.page.content = /*html*/ `
        <article class="min-h-screen">
            <h1>Authenticating....</h1>
        </article>
        `

    let html = await buildHTML(store)
    return new Response(html, { status: 200, headers: headers })
}