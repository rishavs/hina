import { serve, serveTls } from 'https://deno.land/std/http/server.ts'
import { Hono } from 'https://deno.land/x/hono/mod.ts'
import { logger, serveStatic } from 'https://deno.land/x/hono/middleware.ts'

import {pingDB} from "./database.js"
import {showPostsListPage} from "./routes/showPostsListPage.js"
import {showPostDetailsPage} from "./routes/showPostDetailsPage.js"
import {showAboutPage} from "./routes/showAboutPage.js"
import {showErrorPage} from "./routes/showErrorPage.js"

console.log(await pingDB())

const app = new Hono()

app.use('/pub/*', serveStatic({ root: './' }))
app.use('*', logger())

app.get('/',       async (c) => await showPostsListPage(c))
app.get('/about',  async (c) => await showAboutPage(c))
app.get('/p',      async (c) => await showPostsListPage(c))
app.get("/p/:id",  async (c) => await showPostDetailsPage(c))

app.onError((err, c) => {
    // Unauthorized                  = 401
    // PageNotFound                  = 404
    // StatusTeapot                  = 418
    // InternalServerError           = 500
    // GatewayTimeout                = 504

    if (! [401, 404, 500, 504].includes( err.errCode)) {
        err.errCode = 500
        err.errDescr = "You broke the server!"
        err.errFlavour = "Hamsters are dispatched to fix it. Hold on tight!"
    }

    // console.error(err)  // TODO: log this
    console.error(err.message)
    console.error(err.errCode)
    console.error(err.errDescr)
    console.error(err.errFlavour)
    return showErrorPage(c, err)
}) 

app.notFound((c) => {
    // showErrorPage(c, "404 Error")
    let err = new Error ("PageNotFound")
    err.errCode = 404
    err.errDescr = "Welp! This page cannot be found"
    err.errFlavour = "Let's just look at cats instead"
    throw err
})

serveTls(app.fetch, {
    port: 443,
    certFile: "cert.pem",
    keyFile: "key.pem",
  });