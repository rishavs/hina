// import postgres from 'https://deno.land/x/postgresjs/mod.js'
// import "https://deno.land/x/dotenv/load.ts";

// // To use a db connection, you need to add the database connection path in
// // a .env file in the project root with the "DB_URI" key

// const db = postgres(Deno.env.get("DB_URI"), {

// })

// const pingDB = async () => {
//     return await db`select 'DB Connection was successful!' as msg`
// }

// const fetchPostsList = async () => {
//     return await db`select * from posts limit 10`
// }
// const fetchPostDetails = async (id) => {
//     let queryResult = await db`select * from posts where id = ${id}`

//     if (queryResult.length == 0) {
//         throw new Error("404:PageNotFound")
//     }
    
//     return queryResult
// }

// export {pingDB, fetchPostsList, fetchPostDetails}

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
        err.name = "404"
        err.message = "this id doesn't exists in the db"
        throw err
    }
    // console.log(result)
    return result.rows
}