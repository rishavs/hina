import { buildHTML } from "../views/buildHTML.js"

export const showErrorPage = async (e) => {
    let headers = new Headers(
        { "Content-Type": "text/html; charset=UTF-8" },
        { "Powered-by": "VIEW: Pika Pika Pika Choooo" }
    )
    let store = {
        page: {},
        user: {},
    }
    store.page.title = "META: ERROR Page"
    store.page.descr = "META: This is the ERROR page"
    store.page.content = /*html*/ `
        <article class="min-h-screen">
            <h1>ERROR: ${e.message}</h1>
            <h2>${e.cause}</h2>
            <h2>${e.stack}</h2>
        </article>
        `

    let html = await buildHTML(store)
    return new Response(html, { status: 200, headers: headers })
}