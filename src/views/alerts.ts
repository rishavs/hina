import { Store } from "../defs.js";

export const Alerts = async (store: Store) => {  
    return /*html*/`
    <div id="error_alert" class="px-32 mt-4 hidden">
        <div class="alert alert-error flex justify-between">
            <span id="error_alert_text" class="px-8">Error! Task failed successfully.</span>
            <div>
                <button class="btn btn-sm" onclick="error_alert.classList.toggle('hidden')">Dismiss</button>
            </div>
        </div>
    </div>

    <div id="sticky_alert" class="px-32 mt-4 hidden">
        <div class="alert flex justify-between">
            <span id="sticky_alert_text" class="px-8">we use cookies for no reason.</span>
            <div>
            <a id="sticky_alert_link" class="link" href="/about">Goto Link</a>
            <button class="btn btn-sm" onclick="sticky_alert.classList.toggle('hidden')">Dismiss</button>
            </div>
        </div>
    </div>

    <script>
        function triggerAlert(type, text, link) {
            if (type == "error") {
                error_alert_text.innerText = text;
                error_alert.classList.toggle("hidden");
            } else if (type == "sticky") {
                sticky_alert_text.innerText = text;
                sticky_alert_link.href = link;
                sticky_alert.classList.toggle("hidden");
            }
        }
    </script>`
}