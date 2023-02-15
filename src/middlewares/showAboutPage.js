// deno-lint-ignore-file
import {renderLayout} from "../views/renderLayout.js"
import {about} from "./../views/pages/about.js"

export const showAboutPage = async (c) => {
    const page = await about()
    var props = {
        title: `About Page`,
        description: "This here is the description of the post details page",
        page : page
    }

    const view = renderLayout(props)
    return c.html(view)    

}
