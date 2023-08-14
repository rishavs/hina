export const parseCookies = (cookie: string | null) => {
    let cookies: Record<string, string> = {}
    if (cookie) {
        let items = cookie.split(';')
        for (let item of items) {
            let [name, value] = item.split('=')
            cookies[name.trim()] = value
        }
    }
    return cookies
}