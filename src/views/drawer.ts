export const Drawer = async () => /*html*/`
    <div class="drawer-side z-20">
        <label for="left-drawer-trigger" class="drawer-overlay"></label> 
        <ul class="menu flex flex-col h-full bg-base-200 lg:w-80 overflow-auto px-12">
            <li class="menu-title text-lg ">Categories</li>
            <!-- Sidebar content here -->
            <li><a class="active">All</a></li>
            <li><a>1: Meta</a></li>
            <li><a>2: Science & Technology</a></li>
            <li><a>3: Gaming</a></li>
            <li><a>4: World News</a></li>
            <li><a>5: Sports</a></li>
            <li><a>6: Business</a></li>
            <li><a>7: Lifestyle</a></li>
            <li><a>8: Entertainment</a></li>
            <li><a>9: Funny</a></li>
            <li><a>10: Cute Stuff</a></li>

            <li><a>0: Everything Else</a></li>
        </ul>
    </div>
`