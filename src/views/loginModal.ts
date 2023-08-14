import { Store } from "../defs.js";

export const loginModal = async (store: Store) => {  
    return /*html*/`
        <input type="checkbox" id="loginModal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box relative">
                <label for="loginModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

                <script src="https://accounts.google.com/gsi/client" async defer></script>
                <div id="g_id_onload"
                    data-client_id=${store.env.GOOGLE_KEY_ID}
                    data-context="signin"
                    data-ux_mode="redirect"
                    data-login_uri="${store.req.url.origin}/api/login/google?redirectTo=${encodeURIComponent(store.req.url.pathname)}"
                    data-nonce="biaqbm70g23"
                    data-skip_prompt_cookie="D_UID"
                    data-auto_select="true"
                    data-itp_support="true">
                </div>
                
                <div class="g_id_signin"
                    data-type="standard"
                    data-shape="rectangular"
                    data-theme="outline"
                    data-text="signin_with"
                    data-size="large"
                    data-logo_alignment="left">
                </div>
                
            </div>

        </div>
    `
}
// TODO: add 	data-nonce="biaqbm70g23" wherethe nonce is generated on serevr