export const postCard = async (post) => {   
    return /*html*/`
    <li> <a href="/p/${post.id}">${post.title}</a></li>
    `
}


