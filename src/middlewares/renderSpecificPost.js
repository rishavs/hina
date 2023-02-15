export const renderSpecificPost = async (ctx) => {
    ctx.res.bodyText = `Type: ${ctx.req.resourceType}\nID: ${ctx.req.resourceId}`
}
