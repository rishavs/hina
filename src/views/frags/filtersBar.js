export const FiltersBar = () => /*html*/ `
    <nav class="navbar bg-secondary px-16">
        <div class="navbar-start">
            <div class="tabs tabs-boxed bg-secondary">
                <a class="tab tab-active">All</a>
                <a class="tab">Technology</a>
                <a class="tab">Funny</a>
                <a class="tab">Worldnews</a>
                <a class="tab">Sports</a>
                <a class="tab">Science</a>
            </div>
        </div>
        <div class="navbar-end">
            <div class="dropdown dropdown-end mx-2">
                <label tabindex="0" class="btn btn-outline"> Most Recent </label>
                <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li><a>Last 24 hours</a></li>
                    <li><a>Last week</a></li>
                    <li><a>Last Year</a></li>
                </ul>
            </div>
        </div>
    </nav>
`