import { fetchAllPosts } from "../database"

export const prepHomePage = async (ctx) => {
    const data = await fetchAllPosts(ctx)

    let postsList = ""
    for (var item of data) {
        postsList += `<li><a href="/p/${item.id}">${item.title}</a></li>\n`
    }

    ctx.res.pageMetadata.title = "Posts List",
    ctx.res.pageMetadata.description = "This here is the description of the post list page",
    ctx.res.pageContent = /*html*/`
        <article class="min-h-screen">
            <h1> HOME PAGE</h1>
            <ol> ${postsList} </ol>
        </article>
    `
}