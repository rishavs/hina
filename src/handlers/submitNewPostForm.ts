import { jwtDecrypt } from "jose";
import { Store } from "../defs"

export const submitNewPostForm = async (store: Store) => {

    let formData = await store.req.raw.formData()
    formData.forEach((value, key) => {
        console.log(`${key} ==> ${value}`);
    })

    // ------------------------------------------
    // Decrypt user cookie
    // ------------------------------------------
    if (!store.req.cookies.D_UID) {
        throw new Error("401", { cause: "No user cookie present" })
    }
    console.log("Original text: ", store.req.cookies.D_UID)

    const secret = new TextEncoder().encode(store.env.SECRET)

    const options = {
        issuer: "https://digglu.com",
        contentEncryptionAlgorithms: ["A256GCM"],
        keyManagementAlgorithms: ["dir"],
    };
    let uid = await jwtDecrypt(store.req.cookies.D_UID, secret, options);

    console.log("Decrypted JWE: ", JSON.stringify(uid))

    // ------------------------------------------
    // Verify user in db
    // ------------------------------------------
    


    // ------------------------------------------
    // Validate post details
    // ------------------------------------------
    // ------------------------------------------
    // Fetch open graph data
    // ------------------------------------------
    // ------------------------------------------
    // Save post
    // ------------------------------------------


    store.res.content = JSON.stringify({ message: "Hello from the API" })
}