import { Store } from "../defs";

export const FREModal = async (store: Store) => {  
    return /*html*/`
    <!-- Open the modal using ID.showModal() method -->
    <dialog id="freModal" class="modal modal-bottom lg:modal-middle">
        <div class="modal-box flex flex-col gap-4">
            <h3 class="font-bold text-lg text-center">Welcome to Digglu!</h3>
            <p class="">Let's set you up with your user details.
            This is how you look to everyone else.</p>
            
            
            <button class="btn relative flex items-center overflow-hidden shadow-lg lg:btn-lg border border-base-100 w-full py-4">
                <img class="absolute -left-2 w-16 rounded-r-full shadow-lg lg:w-20" src="pub/bm.png" />
                <div class=" pl-12 lg:pl-16">
                    <div class="truncate">
                        Andrew Alfred Dingus Berrius Bombus Birrus
                    </div>
                </div>
            </button>
            
            <small class="text-xs opacity-50">Note: You can always do this later in the profile section.</small>

            <p class="py-4">This is how you look to everyone else.</p>

            <div class="flex flex-col items-center gap-2">
                
                <form method="" class="w-full">
                                       
                    <div class="form-control rounded-box border p-2">
                        <label class="label">
                            <span class="label-text">Import from device</span>
                            <span class="label-text-alt">?</span>
                        </label>                            
                        <input type="file" class="file-input file-input-sm lg:file-input-md form-control file-input-bordered w-full" />
                        
                        <div class="divider">Or</div>    
                        <label class="label">
                            <span class="label-text">Paste the image url</span>
                            <span class="label-text-alt">?</span>
                        </label>
                        
                        <input type="text" placeholder="Type here" class="input input-sm lg:input-md input-bordered" />

                        <label class="label">
                        <span class="label-text-alt">Bottom Left label</span>
                        </label>
                    </div>
                        
                    <p class="py-4">This is how you look to everyone else.</p>

                    <div class="form-control rounded-box border p-2">
                        <label class="label">
                        <span class="label-text">What is your display name?</span>
                        <span class="label-text-alt">?</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-sm lg:input-md input-bordered" />

                        <label class="label">
                        <span class="label-text-alt">Bottom Left label</span>
                        </label>
                    </div>
                </form>
            </div>


            

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