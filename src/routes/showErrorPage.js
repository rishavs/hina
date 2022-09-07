// deno-lint-ignore-file
import {render} from "./../views/render.js"
import {errorPage} from "./../views/pages/error.js"

export const showErrorPage = async (c, err) => {

    const page = errorPage(err)
    var props = {
        title: `${err.errCode} ERROR PAGE`,
        description: `ERROR: ${err}`,
        page : page
    }

    const view = render(props)
    return c.html(view, err.errCode || 500)    
}

