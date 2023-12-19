import { fetchSpecificPostById } from "../database";
import { Store, Post } from "../defs";
import { Comment } from "../views/comment";
import { CommentsTree } from "../views/commentsTree";
import { Filters } from "../views/filters";

export const buildPostDetailsPage = async (store: Store) => {
    store.page.title = `Post Page`;
    store.page.descr = `This is the Post - ${store.req.slug}`;

    const result = await fetchSpecificPostById(store);
    if (result.size == 0) {
        let err = new Error();
        err.message = "404";
        err.cause = "this id doesn't exists in the db";
        throw err;
    }

    let post = result.rows[0] as Post;
    console.log(post);

    store.page.html = /*html*/ `
    <div class="flex flex-col gap-4">
        <section>
            ${Filters()}
            ${await Comment(post)}
        </section>
        <section name="comments">
            ${await CommentsTree()}
        </section>
    </div>

`;
};