export const fetchAllPosts = async (ctx) => {
    // let conn = createConn(env)
    let result = await ctx.conn.execute('select * from posts limit 10')
    return result.rows
}
export const fetchSpecificPostById = async (ctx, id) => {
    // let conn = createConn(env)
    let result = await ctx.conn.execute('select * from posts where id=?', [id])
    if (result.rows.length == 0) {
        let err = new Error()
        err.message = "404"
        err.cause = "this id doesn't exists in the db"
        throw err
    }
    // console.log(result)
    return result.rows
}