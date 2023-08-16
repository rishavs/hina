import { Store } from "../defs.js";

export const loginModal = async (store: Store) => {  
    return /*html*/`
        <dialog id="loginModal" class="modal">
            <form method="dialog" class="modal-box">
            
                <div class="modal-action">
                    <button class="btn">X</button>
                </div>

                <h3 class="font-bold text-lg">Hello!</h3>
                <p class="py-4">Press ESC key or click the button below to close</p>
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

            </form>
        </dialog>
    `
}
// TODO: add 	data-nonce="biaqbm70g23" wherethe nonce is generated on serevr