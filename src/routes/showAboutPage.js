// deno-lint-ignore-file
import {render} from "./../views/render.js"
import {about} from "./../views/pages/about.js"

export const showAboutPage = async (c) => {
    const page = await about()
    var props = {
        title: `About Page`,
        description: "This here is the description of the post details page",
        page : page
    }

    const view = render(props)
    return c.html(view)    

}
