export const handleSocialAuth = async (c) => {
    console.log(c.req)
    return await c.text("OK", 200)    
}
