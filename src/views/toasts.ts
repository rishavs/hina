import { Store } from "../defs";

export const Toasts = async (store: Store) => {  
    return /*html*/`
    <div class="toast toast-top toast-end mt-16 mr-28 ">

        <div id="success_toast" class="alert alert-success auto-hide hidden">
            <div class="flex flex-col">
                <progress class="progress w-full h-1 mb-1 animate-progress bg-primary-content" value="0"></progress>
                <span id="success_toast_text"> ℹ️ Message was sent.</span>
            </div>
            <button class="btn btn-sm btn-ghost" onclick="successToast.classList.toggle('hidden')">✕</button>
        </div>
        <div id="info_toast" class="alert alert-info hidden">
            <span id="info_toast_text">You have new messages.</span>
            <button class="btn btn-sm btn-ghost" onclick="infoToast.classList.toggle('hidden')">✕</button>
        </div>
    </div>

    <style>
        @keyframes progressAnimation {
            0% { width: 0}
            100% { width: 100% } 
        }
        .animate-progress { animation: progressAnimation 3s linear}

        @keyframes autoHideElement {
            0% { opacity: 1 }
            100% {
                opacity: 0;
                display: none;
            }
        }
        .auto-hide {animation: autoHideElement 1s 3s forwards}
    </style>

    <script>
        // func which takes input - type of toast, text and renders the toast
        function triggerToast(type, text) {
            if (type =="success") {
                success_toast_text.innerText = text;
                success_toast.classList.toggle("hidden");
            } else if (type == "info") {
                info_toast_text.innerText = text;
                info_toast.classList.toggle("hidden");
            }

        }
    </script>`
}