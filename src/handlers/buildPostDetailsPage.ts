import { fetchSpecificPostById } from "../database"
import { Store, Post } from '../defs.js'

export const buildPostDetailsPage = async (store: Store) => {
    store.page.title = `Post Page`
    store.page.descr = `This is the Post - ${store.req.id}`

    const result = await fetchSpecificPostById(store)
    if (result.size == 0) {
        let err = new Error()
        err.message = "404"
        err.cause = "this id doesn't exists in the db"
        throw err
    }

    let post = result.rows[0] as Post
    console.log(post)

    store.page.html = /*html*/ `
        <article class="">
            <h1>Page Id: ${store.req.id}</h1>
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        </article>
    
    `
}