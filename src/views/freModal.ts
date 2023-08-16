import { Store } from "../defs.js";

export const freModal = async (store: Store) => {  
    return /*html*/`
        <!-- Open the modal using ID.showModal() method -->
        <dialog id="freModal" class="modal">
            <form method="dialog" class="modal-box">
                <div class="modal-action">
                    <button class="btn">Close</button>
                </div>

                <h3 class="font-bold text-lg">Hello!</h3>
                <p class="py-4">Press ESC key or click the button below to close</p>
            </form>
        </dialog>
        <script>
            const triggerValue = document.cookie
                .split("; ")
                .find((row) => row.startsWith("D_MODAL_FRE="))
                ?.split("=")[1];

            if (triggerValue == "true") {
                document.cookie = "D_MODAL_FRE=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;"
                freModal.showModal();
            }


        </script>

`
}