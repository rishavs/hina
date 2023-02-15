// deno-lint-ignore-file
import {renderLayout} from "../views/renderLayout.js"
import {errorPage} from "./../views/pages/error.js"

export const showErrorPage = (c, err) => {
    let ErrMsgs = {
        "401:Unauthorized": {
            "errCode": 401,
            "errDescr": "You do not have the access rights to this resource",
            "errFlavour": "This is super duper top secret stuff. Agents have been dipatched to erase your memory of this incidence"
        },
        "404:PageNotFound": {
            "errCode": 404,
            "errDescr": "This page doesn't exists",
            "errFlavour": "If you arrived here from outside, maybe this page has been deleted. Or it never existed. Or the squirrels stole it. Damn them!"
        },
    }

    if (err.message in ErrMsgs) {
        err.errCode = ErrMsgs[err.message]["errCode"]
        err.errDescr = ErrMsgs[err.message]["errDescr"]
        err.errFlavour = ErrMsgs[err.message]["errFlavour"]
    } else {
        err.errCode = 500
        err.errDescr = "You broke the server!"
        err.errFlavour = "But don't worry. Our best hamsters have been dispatched to fix it. Hold on tight!"
    }

    // console.error(err)  // TODO: log this
    console.error(err.message)
    console.error(err.errCode)
    console.error(err.errDescr)
    console.error(err.errFlavour)

    var props = {
        title: `${err.errCode} ERROR PAGE`,
        description: `ERROR: ${err}`,
        page : errorPage(err)
    }

    const view = renderLayout(props)
    return c.html(view, err.errCode || 500)    
}

