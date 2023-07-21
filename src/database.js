import { connect } from '@planetscale/database'

// ------------------------------------------
// Configure DB Connection
// ------------------------------------------
const connectToPlanetScale = (env) => {
    const DBConfig = {
        host    : env.DATABASE_HOST,
        username: env.DATABASE_USERNAME,
        password: env.DATABASE_PASSWORD,
        fetch   : (url, init) => {
            delete (init)["cache"]; // Remove cache header
            return fetch(url, init);
        }
    }
    return connect(DBConfig)
}

export const fetchAllPosts = async (env) => {
    let conn = connectToPlanetScale(env)
    let result = await conn.execute('select * from posts limit 10')
    return result.rows
}

export const fetchPostById = async (env, id) => {
    let conn = connectToPlanetScale(env)

    let result = await conn.execute('select * from posts where id=?', [id])
    if (result.rows.length == 0) {
        let err = new Error()
        err.message = "404"
        err.cause = "this id doesn't exists in the db"
        throw err
    }
    return result.rows
}

export const getUserUnqid = async (env) => {
    let conn = connectToPlanetScale(env)
    let query = 'select slug from users where google_id=?)'
    let result = await conn.execute(query, [store.page.googleID])
    return result
}

export const addGoogleUser = async (env, newUser) => {
    let conn = connectToPlanetScale(env)
    let query = `INSERT IGNORE INTO users (slug, name, thumb, honorific, flair, role, level, google_id) 
        VALUES (:slug, :name, :thumb, :honorific, :flair, :role, :level, :google_id)`
    let result = await conn.execute(query, {slug : newUser.slug, name : newUser.name, thumb : newUser.thumb, honorific : newUser.honorific, flair : newUser.flair, role : newUser.role, level : newUser.level, google_id : newUser.googleID})
    return result
}
