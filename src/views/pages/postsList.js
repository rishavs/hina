import {fetchPostsList} from "./../../database.js"
import {postCard} from "../frags/postCard.js"

export const postsList = async () => {

    const data = await fetchPostsList() 

    let content = ""
    data.forEach((post) => {
        content += postCard(post)    
    })

    return /*html*/`
        <article>
            <ol>
                ${content}
            </ol>
        </article>
    ` 
}