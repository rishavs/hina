import {Header} from "./frags/header.js"
import {FiltersBar} from "./frags/filtersBar.js"
import {loginModal} from "./frags/loginModal.js"
import { Footer } from "./frags/footer.js"


export const renderLayout = (data) => /*html*/`
    <html lang="en">
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

            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://cdn.jsdelivr.net/npm/daisyui@latest/dist/full.min.css" rel="stylesheet" type="text/css" />
            <script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pace-js@latest/pace-theme-default.min.css">

            <script src="https://apis.google.com/js/platform.js" async defer></script>
        </head>
        <body class="md:mx-8">
            ${Header()}
            ${FiltersBar()}
            ${data.page}
            ${loginModal()}
            ${Footer()}
        </body>
    </html>
`