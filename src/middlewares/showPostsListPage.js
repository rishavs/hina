// deno-lint-ignore-file
import {renderLayout} from "../views/renderLayout.js"
import {postsList} from "../views/pages/postsList.js"

export const showPostsListPage = async (c) => {

    var props = {
        title: "Posts List",
        description: "This here is the description of the post list page",
        page : await postsList()
    }

    const view = renderLayout(props)
    return c.html(view)    
}
