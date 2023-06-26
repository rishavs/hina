export const buildErrorPage = async (ctx, err) => {
    console.log(err)
    let errDescr    = "You broke the server!"
    let errFlavour  = "But don't worry. Our best hamsters have been dispatched to fix it. Hold on tight!"

    let ErrMsgs = {
        401: {
            "errDescr"  : "You do not have the access rights to this resource",
            "errFlavour": "This is super duper top secret stuff. Agents have been dipatched to erase your memory of this incidence"
        },
        404: {
            "errDescr"  : "This page doesn't exists",
            "errFlavour": "If you arrived here from outside, maybe this page has been deleted. Or it never existed. Or the squirrels stole it. Damn them!"
        },
        500: {
            "errDescr"  : "You broke the server!",
            "errFlavour": "But don't worry. Our best hamsters have been dispatched to fix it. Hold on tight!"
        }
    }
    // Sepaaretd these out as this are the general user errors and may need to be customized
    if ([401, 404].includes(err.message)) {
        errDescr    = ErrMsgs[err.message].errDescr
        errFlavour  = ErrMsgs[err.message].errFlavour
    } else {
        errDescr    = ErrMsgs[500].errDescr
        errFlavour  = ErrMsgs[500].errFlavour
    }

    ctx.res.pageContent = /*html*/ `
        <article class="min-h-screen">
            <h1>${err.message}</h2>
            <h2>${err.cause}</h2>
            <h2>${errDescr}</h2>
            <h2>${errFlavour}</h2>
        </article>
    `
}
