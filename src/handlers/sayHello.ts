import { Store } from "../defs"

export const sayHello = async (store: Store) => {
    store.res.content = JSON.stringify({ message: "Hello from the API" })
}