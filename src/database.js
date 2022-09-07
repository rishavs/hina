import postgres from 'https://deno.land/x/postgresjs/mod.js'
import "https://deno.land/x/dotenv/load.ts";

// To use a db connection, you need to add the database connection path in
// a .env file in the project root with the "DB_URI" key

const db = postgres(Deno.env.get("DB_URI"), {

})

const pingDB = async () => {
    return await db`select 'DB Connection was successful!' as msg`
}

const fetchPostsList = async () => {
    return await db`select * from posts limit 10`
}
const fetchPostDetails = async (id) => {
    console.log(id)
    let queryResult = await db`select * from posts where id = ${id}`
    console.log(queryResult)

    if (queryResult.length == 0) {
        console.log("empty res")
        let err = new Error ("PageNotFound")
        err.errCode = 404
        err.errDescr = "Welp! This page cannot be found"
        err.errFlavour = "Let's just look at cats instead"
        throw err
    }
    return queryResult
}

export {pingDB, fetchPostsList, fetchPostDetails}