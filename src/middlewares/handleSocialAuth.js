export const handleSocialAuth = async (ctx) => {
    const data = await ctx.request.text()
    const paramData = new URLSearchParams(data)
    ctx.res.bodyText = ctx.req.resourceId + "\n" + paramData.toString()
}
