// deno-lint-ignore-file
import {render} from "./../views/render.js"
import {postsList} from "./../views/pages/postsList.js"

export const showPostsListPage = async (c) => {

    const page = await postsList()
    var props = {
        title: "Posts List",
        description: "This here is the description of the post list page",
        page : page
    }

    const view = render(props)
    return c.html(view)    
}
