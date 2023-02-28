create auth route
add auth route to button
when user clicks on button, handle the url click. serverside redirect the user to a dynamic auth url of google's rest api
    create crsf token. put token in kv? put in cookie?
    create nonce
    redirect to the full url with params
    when user authenticates, he is sent back to the callback url
    in callback url, collect the csrf token.  
    get token from cookie and check if same as 
