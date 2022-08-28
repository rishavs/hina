import {fetchPostDetails} from "./../../database.js"

export const postDetails = async (id) => {

    const data = await fetchPostDetails(id) 

    const content = /*html*/`
        <article>

            <h1> ${data[0].id} : ${data[0].title} </h1>
            <p> ${data[0].description} </p>
        </article>
    `
    return content 
}