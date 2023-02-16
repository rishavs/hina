export const initHeaders = async (ctx) => {
    ctx.res.headersList.append('Powered-by', 'Pika Pika Pika Choooo')
    ctx.res.headersList.append('Content-Type', 'text/html; charset=UTF-8')

}