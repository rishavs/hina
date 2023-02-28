import { fetchSpecificPostById } from "../database"

export const prepSpecificPost = async (ctx) => {
    const postId = ctx.req.resourceId
    const data = await fetchSpecificPostById(ctx, postId)

    ctx.res.pageContent = /*html*/ `
        <article class="min-h-screen">
            <h1>Page Id: ${postId}</h1>
            <h2>${data[0].title}</h2>
            <p>${data[0].description}</p>
        </article>
        `
}
