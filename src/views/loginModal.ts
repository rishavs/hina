import { Store } from "../defs";

export const LoginModal = async (store: Store) => {
  return /*html*/ `
    <dialog id="loginModal" class="modal">
        <div class="modal-box bg-neutral">
            <div class="modal-action -mt-2 p-0">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn btn-ghost text-neutral-content">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </form>
            </div>
            <div class="items-center text-center text-neutral-content">
                <h2 class="font-medium text-xl my-4">Login to Digglu using your Google Id</h2>
                <div class="flex justify-center my-4">
                    <script src="https://accounts.google.com/gsi/client" async defer></script>
                    <div id="g_id_onload"
                        data-client_id=${store.env.GOOGLE_KEY_ID}
                        data-context="signin"
                        data-ux_mode="redirect"
                        data-login_uri="${store.req.url.origin}/api/login/google?redirectTo=${encodeURIComponent(store.req.url.pathname)}"
                        data-nonce="biaqbm70g23"
                        data-skip_prompt_cookie="D_UID"
                        data-auto_select="false"
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
            
        </dialog>
    `;
};
// TODO: add 	data-nonce="biaqbm70g23" wherethe nonce is generated on serevr
