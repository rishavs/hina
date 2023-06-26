export const handleSocialAuth = async (ctx) => {
    const data = await ctx.request.text()
    const paramData = new URLSearchParams(data)
    // ctx.res.bodyText = ctx.req.resourceId + "\n" + paramData.toString()

    const params = new URLSearchParams(ctx.request.url) 
    params.forEach((value, key) => {
        console.log(value, key);
      })
    // console.log(ctx.request.url)
    // console.log(ctx.request.url.searchParams.toString())
    ctx.res.bodyText = ctx.req.resourceId + "\n" + params.toString()
}
