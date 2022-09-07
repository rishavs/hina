export const errorPage = (err) => /*html*/`
    <article class="min-h-screen">
        <h1>${err.errCode}</h1>
        <h1>${err.errDescr}</h1>
        <h1>${err.errFlavour}</h1>
        <p></p>
    </article>
`