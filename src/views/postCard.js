export const postCard = (post) => {   
    return /*html*/`
    <li> <a href="/p/${post.id}">${post.title}</a></li>
    `
}


