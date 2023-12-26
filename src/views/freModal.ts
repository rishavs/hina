import { Store } from "../defs";

export const FREModal = async (store: Store) => {  
    return /*html*/`
    <!-- Open the modal using ID.showModal() method -->
    <dialog id="freModal" class="modal">
        <div class="modal-box">
            <h3 class="font-bold text-lg text-center">Welcome to Digglu!</h3>
            <p class="pt-4">Let's set you up with your user details</p>
            <small class="text-xs opacity-50">Note: You can always do this later in your profile section.</small>
            
            

            <div class="modal-action">
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
            </form>
            </div>
        </div>
    </dialog>
    <script>
    </script>
    `
}

// <form method="" class="modal-box p-8 lg:p-16">

// <h3 class="font-bold text-lg text-center">Welcome to Digglu!</h3>
// <p class="pt-4">Let's set you up with your user details</p>
// <small class="text-xs opacity-50">Note: You can always do this later in your profile section.</small>

// <div class="form-control w-full">
//     <label class="label">
//         <span class="label-text">What is your name?</span>
//         <span class="label-text-alt">Top Right label</span>
//     </label>
//     <input type="text" placeholder="Type here" class="input input-bordered w-full" />
//     <label class="label">
//         <span class="label-text-alt">Bottom Left label</span>
//         <span class="label-text-alt">Bottom Right label</span>
//     </label>
// </div>

// <div class="form-control w-full max-w-xs">
//     <label class="label">
//         <span class="label-text">What is your name?</span>
//         <span class="label-text-alt">Top Right label</span>
//     </label>
//     <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
//     <label class="label">
//         <span class="label-text-alt">Bottom Left label</span>
//         <span class="label-text-alt">Bottom Right label</span>
//     </label>
// </div>

// </form>