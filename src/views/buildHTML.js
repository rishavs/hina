import {Header} from "./header.js"
import {FiltersBar} from "./filtersBar.js"
import {loginModal} from "./loginModal.js"
import { Footer } from "./footer.js"


export const buildHTML = async (store) => {
    return /*html*/`
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>${store.page.title}</title>
            <link rel="icon" type="image/x-icon" href="/pub/favicon.ico">

            <meta name="description" content="${store.page.description}">
            <head prefix="og: http://ogp.me/ns#">
            <meta property="og:type" content="article">
            <!-- More elements slow down JSX, but not template literals. -->
            <meta property="og:title" content="${store.page.title}">

            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://cdn.jsdelivr.net/npm/daisyui@latest/dist/full.min.css" rel="stylesheet" type="text/css" />
            <script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pace-js@latest/pace-theme-default.min.css">

            <script src="https://apis.google.com/js/platform.js" async defer></script>
        </head>
        <body class="md:mx-8">
            ${Header()}
            ${FiltersBar()}
            ${store.page.content}
            ${loginModal(store)}
            ${Footer()}
        </body>
    </html>
`}