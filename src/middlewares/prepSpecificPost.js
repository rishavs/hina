export const prepSpecificPost = async (ctx) => {

    ctx.res.pageContent = /*html*/ `
        <article class="min-h-screen">
            <h1>Page Id: ${ctx.req.resourceId}</h1>
        </article>
        `
}
