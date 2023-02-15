export const loginModal = () => /*html*/`
    <input type="checkbox" id="loginModal" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
            <label for="loginModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

            
            <script src="https://accounts.google.com/gsi/client" async defer></script>
            <div id="g_id_onload"
               data-client_id="326093643211-dh58srqtltvqfakqta4us0il2vgnkenr.apps.googleusercontent.com"
               data-login_uri="https://your.domain/your_login_endpoint"
               data-auto_prompt="false"
               >
            </div>
            <div class="g_id_signin"
               data-type="standard"
               data-size="large"
               data-theme="outline"
               data-text="sign_in_with"
               data-shape="rectangular"
               data-logo_alignment="left">
            </div>
        </div>
    </div>
`
// TODO: add 	data-nonce="biaqbm70g23" wherethe nonce is generated on serevr