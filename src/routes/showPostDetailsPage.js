// deno-lint-ignore-file
import {render} from "./../views/render.js"
import {postDetails} from "./../views/pages/postDetails.js"


export const showPostDetailsPage =  async (c) => {
    const id = c.req.param('id')
    const page = await postDetails(id)
    var props = {
        title: `Posts Details for ${id}`,
        description: "This here is the description of the post details page",
        page : page
    }

    const view = render(props)
    return c.html(view)    
}
