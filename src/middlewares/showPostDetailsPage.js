// deno-lint-ignore-file
import {renderLayout} from "../views/renderLayout.js"
import {postDetails} from "./../views/pages/postDetails.js"


export const showPostDetailsPage =  async (c) => {
    const id = c.req.param('id')

    var props = {
        title: `Posts Details for ${id}`,
        description: "This here is the description of the post details page",
        page : await postDetails(id)
    }

    const view = renderLayout(props)
    return c.html(view)    
}
