export const sayHello = async (request, env, ctx) => {
    console.log("Hello from the API")

    let headers = new Headers(
            {'content-type': 'application/json;charset=UTF-8'},
            {'Powered-by': 'API: Pika Pika Pika Choooo'}
    )

    let content = JSON.stringify({
        "message": "Hello from the API"
    })
    console.log(content)

    // return new Response(content, { status: 200, headers: headers })
    return Response.redirect('http://localhost:3000/p/13', 302)
}