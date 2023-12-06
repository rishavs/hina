import { Store } from "../defs";

export const FREModal = async (store: Store) => {  
    return /*html*/`
        <!-- Open the modal using ID.showModal() method -->
        <dialog id="freModal" class="modal">
            <form method="dialog" class="modal-box p-16">

                <h3 class="font-bold text-lg">Welcome to Digglu!</h3>
                <p class="py-4">Let's get you set up with your display details</p>
                <small class="">Note: You can always do this later in your profile section.</small>

                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">What is your name?</span>
                        <span class="label-text-alt">Top Right label</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <label class="label">
                        <span class="label-text-alt">Bottom Left label</span>
                        <span class="label-text-alt">Bottom Right label</span>
                    </label>
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">What is your name?</span>
                        <span class="label-text-alt">Top Right label</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt">Bottom Left label</span>
                        <span class="label-text-alt">Bottom Right label</span>
                    </label>
                </div>

            </form>
        </dialog>
        <script>
        </script>`
}