export const respondWithErrorMessage = async (e) => {

    let headers = new Headers(
            {'content-type': 'application/json;charset=UTF-8'},
            {'Powered-by': 'API: Pika Pika Pika Choooo'}
    )

    return new Response(JSON.stringify({"error": e.message}), { status: e.message, headers: headers })
}