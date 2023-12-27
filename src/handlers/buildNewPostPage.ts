import { Store } from "../defs";

export const buildNewPostPage = async (store: Store) => {
    store.page.title = "META: New Post Page";
    store.page.descr = "META: This is the about page";
    store.page.html = /*html*/ `

        <article class="pt-8 lg:pt-20">
            
            <div class="card w-full bg-base-200 text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">Add a new post</h2>
                    
                    <form class="" action="/api/submitNewPostForm" onsubmit="return validateForm()" method="post">
                
                        <div class="divider"></div> 
        
                        <div class="form-control w-full py-2">                   
                            <div class="dropdown dropdown-bottom w-full">
                                <label class="label">
                                    <span class="label-text">Select a Post Category</span>
                                </label>
                                <select id="post_category_select" class="select select-bordered w-full text-lg" name="category" required>
                                    <option class="text-2xl lg:text-lg" value="" selected disabled hidden>Select Post Category</option>
                                    <option class="text-2xl lg:text-lg" value="meta">Meta</option>
                                    <option class="text-2xl lg:text-lg" value="scitech">Science & Technology</option>
                                    <option class="text-2xl lg:text-lg" value="gaming">Gaming</option>
                                    <option class="text-2xl lg:text-lg" value="sports">Sports</option>
                                    <option class="text-2xl lg:text-lg" value="news">World News</option>
                                    <option class="text-2xl lg:text-lg" value="biz">Business</option>
                                    <option class="text-2xl lg:text-lg" value="life">Lifestyle</option>
                                    <option class="text-2xl lg:text-lg" value="ent">Entertainment</option>
                                    <option class="text-2xl lg:text-lg" value="offbeat">Offbeat</option>
                                    <option class="text-2xl lg:text-lg" value="qt">Animals & Pets</option>
                                    <option class="text-2xl lg:text-lg" value="else">Everything Else</option>
                                </select>
                            </div>
                        </div>

                        
                        <div class="form-control w-full py-2">
                            <label class="label">
                                <span class="label-text">Select a Post Type</span>
                            </label>                   
                            <select id="post_type_select" class="select select-bordered w-full text-lg " name="type"
                                onchange="toggleFormControls()"
                                required
                            >
                                <option class="text-2xl lg:text-lg" value="" selected disabled hidden>Select Post Type</option>
                                <option class="text-2xl lg:text-lg" value="link">Link Post</option>
                                <option class="text-2xl lg:text-lg" value="text">Text Post</option>
                            </select>
                        </div>

                        <div id="post_link_controls" class="form-control w-full hidden py-2">
                            <label class="label">
                                <span class="label-text">Link to external article</span>
                            </label>
                            <input id="post_link_input" type="text" name="link" placeholder="Type here" class="input input-bordered w-full " required minlength="2" maxlength="10"/>
                            <label class="label">
                                <span class="label-text-alt">Bottom Right label</span>
                            </label>
                        </div>

                        <div id="post_title_controls" class="form-control w-full hidden">
                            <label class="label">
                                <span class="label-text">Post Title</span>
                                <span class="label-text-alt">?</span>
                            </label>
                            <input id="post_title_input" type="text" placeholder="Type here" name="title"
                                class="input input-bordered w-full invalid:border-red-500" onInput="countNewPostTitleChars()" minlength="16" maxlength="256" />
                            <label class="label">
                                <span class="label-text-alt">min 16 chars</span>
                                <span id="post_title_char_count" class="label-text-alt">0/256 chars</span>

                            </label>
                        </div>

                        <div id="post_descr_controls" class="form-control hidden">
                            <label class="label">
                                <span class="label-text">Post Description</span>
                                <span class="label-text-alt">?</span>

                            </label>
                            <textarea id="post_descr_textarea" minlength="32" maxlength="4096" name="description"
                                class="textarea textarea-bordered h-24 invalid:border-red-500" placeholder="Bio" onInput="countNewPostDescrChars()"></textarea>
                            <label class="label">
                                <span class="label-text-alt">min 4096 chars</span>
                                <span id="descr_char_count" class="label-text-alt">0/4096 chars</span>
                            </label>
                        </div>
                        
                        <div class="divider"></div> 

                        <div class="card-actions justify-end">
                            <button class="btn">Submit</button>
                        </div>
                    </form>


                </div>
            </div>
                    
        </article>

        <script>
            function toggleFormControls () {
                if (post_type_select.value == "link") {
                    post_title_controls.classList.add("hidden")
                    post_title_input.required = false

                    post_descr_controls.classList.add("hidden")
                    post_descr_textarea.required = false

                    post_link_controls.classList.remove("hidden")
                    post_link_input.required = true
                } else {
                    post_title_controls.classList.remove("hidden")
                    post_title_input.required = true

                    post_descr_controls.classList.remove("hidden")
                    post_descr_textarea.required = true

                    post_link_controls.classList.add("hidden")
                    post_link_input.required = false
                }
            }
            function countNewPostTitleChars() {
                let numOfEnteredChars = post_title_input.value.length;
                post_title_char_count.innerText = numOfEnteredChars + "/256 chars";
            };
            function countNewPostDescrChars() {
                let numOfEnteredChars = post_descr_textarea.value.length;
                descr_char_count.innerText = numOfEnteredChars + "/4096 chars";
            };

            function validateNewPostForm() {
                return true
            }



        </script>
        `;
};
