export const loginModal = () => /*html*/ `
    <input type="checkbox" id="loginModal" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
            <label for="loginModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

            <div id="gsi_btn_container"></div>
            <script src="https://accounts.google.com/gsi/client" async defer></script>
            <script>
                window.onload = function () {
                    google.accounts.id.initialize({
                        client_id: '326093643211-dh58srqtltvqfakqta4us0il2vgnkenr.apps.googleusercontent.com',
                        callback: handleCredentialResponse,
                        auto_select: false,
                        ux_mode: "popup",
                        context: "signin",

                    });
                    google.accounts.id.prompt();
                    google.accounts.id.renderButton(document.getElementById("gsi_btn_container"), {
                        theme: 'outline',
                        size: 'large',
                        click_listener: onClickHandler
                    });
                };
                function handleCredentialResponse(cred) {
                    console.log(cred)
                }
                function onClickHandler(){
                    console.log("Sign in with Google button clicked...")
                }
            </script>
        </div>

    </div>
`
// TODO: add 	data-nonce="biaqbm70g23" wherethe nonce is generated on serevr