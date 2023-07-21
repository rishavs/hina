export const dec2hex = (dec) => {
    return dec.toString(16).padStart(2, "0")
}

// generateId :: Integer -> String
export const generateId = (len) => {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
}

export const parseCookie = (str) => {
    return str
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, v) => {
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
            return acc;
        }, {})
}

export const generateRandomString = async (length) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var array = crypto.getRandomValues(new Uint8Array(length));
    array.forEach(x => result += characters[x % characters.length]);
    return result;
}

