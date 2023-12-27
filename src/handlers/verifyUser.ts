import { getUserFromSession } from '../database';
import { Store, User } from '../defs';

export const verifyUser = async (store: Store) => {
    // ------------------------------------------
    // Check session details
    // ------------------------------------------
    if (!store.req.cookies.D_UID) {
        throw new Error("503", { cause: "No Session ID was found for this user" })
    }
    let resUser = await getUserFromSession(store, store.req.cookies.D_UID)
    if (resUser.rows.length == 0) {
        throw new Error("503", { cause: "No user was found for this session" })
    }
    store.user = resUser.rows[0] as User

    // ------------------------------------------
    // Check if user is a-ok
    // ------------------------------------------
    if (store.user.is_punished) {
        throw new Error("503", { cause: "User is punished" })
    }

}