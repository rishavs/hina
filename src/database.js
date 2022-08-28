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
    return await db`select * from posts where id = ${id}`
}

export {pingDB, fetchPostsList, fetchPostDetails}