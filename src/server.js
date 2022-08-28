import { serve } from 'https://deno.land/std/http/server.ts'
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
    console.error(`${err}`)
    return showErrorPage(c, err)}) 
app.notFound((c) => showErrorPage(c, "404 Error"))


serve(app.fetch)