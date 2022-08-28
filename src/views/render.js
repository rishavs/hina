import {Header} from "./frags/header.js"
import { Footer } from "./frags/footer.js"


export const render = (data) => /*html*/`
<html>
    <head>
        <meta charset="UTF-8">
        <title>${data.title}</title>
        <link rel="icon" type="image/x-icon" href="/pub/favicon.ico">

        <meta name="description" content="${data.description}">
        <head prefix="og: http://ogp.me/ns#">
        <meta property="og:type" content="article">
        <!-- More elements slow down JSX, but not template literals. -->
        <meta property="og:title" content="${data.title}">
        <meta property="og:image" content="${data.image}">
    </head>
    <body>
        ${Header()}
        ${data.page}
        ${Footer()}
    </body>
</html>
`