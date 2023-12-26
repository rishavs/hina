// node_modules/nanoid/index.browser.js
var nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
  byte &= 63;
  if (byte < 36) {
    id += byte.toString(36);
  } else if (byte < 62) {
    id += (byte - 26).toString(36).toUpperCase();
  } else if (byte > 62) {
    id += "-";
  } else {
    id += "_";
  }
  return id;
}, "");

// src/utils.ts
var parseCookies = (cookie) => {
  let cookies = {};
  if (cookie) {
    let items = cookie.split(";");
    for (let item of items) {
      let [name, value] = item.split("=");
      cookies[name.trim()] = value;
    }
  }
  return cookies;
};

// src/views/header.ts
var Header = async (store) => {
  return (
    /*html*/
    `
    <header class="navbar sticky top-0 bg-base-200 opacity-90 rounded-b-box lg:rounded-box border border-base-300 shadow-xl h-8 lg:h-20 z-10">
        <div class="navbar-start">
            <label for="left-drawer-trigger" class="btn btn-ghost drawer-button lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </label>
            <a class="btn btn-ghost p-0 lg:btn-lg text-2xl lg:text-4xl drop-shadow bg-gradient-to-r from-error to-warning text-transparent bg-clip-text" href="/">
                <div class="avatar">
                    <div class="w-12 lg:w-16">
                        <img src="/pub/logo.png" alt="logo" loading="lazy" decoding="async"/>
                    </div>
                </div>
                Digglu
            </a>
        </div>
        <div class="navbar-center">
        </div>

        <div class="navbar-end">
            ${store.req.cookies.D_UID ? (
      /*html*/
      `
            <a href="/p/new" class="btn btn-neutral mx-1">New Post</a>

            <div class="dropdown dropdown-end mx-1 ${store.req.cookies.D_UID ? "" : "hidden"}">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="/pub/bm.png" />
                    </div>
                </label>
                <ul tabindex="0" class="z-20 mt-3 p-2 shadow menu lg:menu-lg dropdown-content bg-base-200 rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a onClick="signOut()">Logout</a></li>
                </ul>
            </div>`
    ) : (
      /*html*/
      `
            <!-- <button onClick="loginModal.showModal()" class="btn btn-neutral mx-1">Login</button> -->
            <div class="flex items-center lg:pr-4">
                <span class="hidden lg:block text-warning pr-2">Sign in with</span>
                <script src="https://accounts.google.com/gsi/client" async defer><\/script>
                <div id="g_id_onload"
                    data-client_id=${store.env.GOOGLE_KEY_ID}
                    data-context="signin"
                    data-ux_mode="redirect"
                    data-login_uri="${store.req.url.origin}/api/login/google?redirectTo=${encodeURIComponent(store.req.url.pathname)}"
                    data-nonce="noncy_drew"
                    data-skip_prompt_cookie="D_UID"
                    data-auto_prompt="true"
                    data-auto_select="true"
                    data-itp_support="true"
                    data-your_own_param_1_to_login="oogaboogo"
                    data-your_own_param_2_to_login="pingpong"
                >
                </div>
                
                <div class="g_id_signin"
                    data-type="icon"
                    data-shape="circle"
                    data-theme="outline"
                    data-text="signin_with"
                    data-size="large"
                    data-logo_alignment="left"
                    data-redirect_to="${encodeURIComponent(store.req.url.pathname)}"    

                >
                </div>
            </div>
            `
    )}

        </div>
    </header>
    <script>
        let signOut = () => {
            window.localStorage.clear();
            document.cookie = "D_UID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            window.location.href = "/logout";
        }
    <\/script>
    `
  );
};

// src/views/loginModal.ts
var LoginModal = async (store) => {
  return (
    /*html*/
    `
    <dialog id="loginModal" class="modal">
        <div class="modal-box bg-neutral-content">
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
                    <script src="https://accounts.google.com/gsi/client" async defer><\/script>
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
                        data-type="icon"
                        data-shape="square"
                        data-theme="outline"
                        data-text="signin_with"
                        data-size="large"
                        data-logo_alignment="left">
                    </div>
                </div>
            </div>
            
        </dialog>
    `
  );
};

// src/views/freModal.ts
var FREModal = async (store) => {
  return (
    /*html*/
    `
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
    <\/script>
    `
  );
};

// src/views/footer.ts
var Footer = async () => (
  /*html*/
  `
    <footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div>
            <span class="footer-title">Community</span> 
            <a class="link link-hover">FAQs</a> 
            <a class="link link-hover">Community Guidelines</a> 
            <a class="link link-hover">Contact Us</a> 
        </div> 
        <div>
            <span class="footer-title">Legal</span> 
            <a class="link link-hover">Terms of use</a> 
            <a class="link link-hover">Privacy policy</a> 
            <a class="link link-hover">Cookie policy</a>
        </div>
    </footer> 


    <footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div class="items-center grid-flow-col">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
            <p>Copyright \xA9 2023 - All right reserved by Studio Mockingbird Ltd</p>
        </div> 
    </footer>
`
);

// src/views/alerts.ts
var Alerts = async (store) => {
  return (
    /*html*/
    `
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
    <\/script>`
  );
};

// src/views/toasts.ts
var Toasts = async (store) => {
  return (
    /*html*/
    `
    <div class="toast toast-top toast-end mt-16 mr-28 ">

        <div id="success_toast" class="alert alert-success auto-hide hidden">
            <div class="flex flex-col">
                <progress class="progress w-full h-1 mb-1 animate-progress bg-base-200-content" value="0"></progress>
                <span id="success_toast_text"> \u2139\uFE0F Message was sent.</span>
            </div>
            <button class="btn btn-sm btn-ghost" onclick="successToast.classList.toggle('hidden')">\u2715</button>
        </div>
        <div id="info_toast" class="alert alert-info hidden">
            <span id="info_toast_text">You have new messages.</span>
            <button class="btn btn-sm btn-ghost" onclick="infoToast.classList.toggle('hidden')">\u2715</button>
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
    <\/script>`
  );
};

// src/views/drawer.ts
var Drawer = async () => (
  /*html*/
  `
    <div class="drawer-side z-20 ">
        <label for="left-drawer-trigger" class="drawer-overlay"></label>
        <ul class="menu lg:menu-lg bg-base-200 flex flex-col justify-center gap-1 lg:gap-2 min-h-screen w-72 lg:w-96 overflow-auto px-12 font-medium">
            <li class="menu-title ">Categories</li>
            <!-- Sidebar content here -->
            <li><a class="active">All</a></li>
            <li><a>Meta</a></li>
            <li><a>Science & Tech</a></li>
            <li><a>Gaming</a></li>
            <li><a>World News</a></li>
            <li><a>Sports</a></li>
            <li><a>Business</a></li>
            <li><a>Lifestyle</a></li>
            <li><a>Entertainment</a></li>
            <li><a>Funny</a></li>
            <li><a>Cute Stuff</a></li>
    
            <li><a>Everything Else</a></li>
        </ul>
    </div>
 `
);

// src/views/floater.ts
var Floaters = async () => {
  return (
    /*html*/
    `
    <button class="btn btn-sm btn-square fixed bottom-20 right-8 z-10 border border-base-100 shadow-xl opacity-75">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
        </svg>
    </button>
    <button class="btn btn-sm btn-square fixed bottom-8 right-8 z-10 border border-base-100 shadow-xl opacity-75">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg> 
    </button>
    <button class="btn btn-sm btn-square fixed bottom-8 right-20 z-10 border border-base-100 shadow-xl opacity-75">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
    </button>
    `
  );
};

// node_modules/@planetscale/database/dist/sanitization.js
function format(query, values) {
  return Array.isArray(values) ? replacePosition(query, values) : replaceNamed(query, values);
}
function replacePosition(query, values) {
  let index = 0;
  return query.replace(/\?/g, (match) => {
    return index < values.length ? sanitize(values[index++]) : match;
  });
}
function replaceNamed(query, values) {
  return query.replace(/:(\w+)/g, (match, name) => {
    return hasOwn(values, name) ? sanitize(values[name]) : match;
  });
}
function hasOwn(obj, name) {
  return Object.prototype.hasOwnProperty.call(obj, name);
}
function sanitize(value) {
  if (value == null) {
    return "null";
  }
  if (typeof value === "number") {
    return String(value);
  }
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
  if (typeof value === "string") {
    return quote(value);
  }
  if (Array.isArray(value)) {
    return value.map(sanitize).join(", ");
  }
  if (value instanceof Date) {
    return quote(value.toISOString().slice(0, -1));
  }
  return quote(value.toString());
}
function quote(text) {
  return `'${escape(text)}'`;
}
var re = /[\0\b\n\r\t\x1a\\"']/g;
function escape(text) {
  return text.replace(re, replacement);
}
function replacement(text) {
  switch (text) {
    case '"':
      return '\\"';
    case "'":
      return "\\'";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\\":
      return "\\\\";
    case "\0":
      return "\\0";
    case "\b":
      return "\\b";
    case "":
      return "\\Z";
    default:
      return "";
  }
}

// node_modules/@planetscale/database/dist/text.js
var decoder = new TextDecoder("utf-8");
function decode(text) {
  return text ? decoder.decode(Uint8Array.from(bytes(text))) : "";
}
function bytes(text) {
  return text.split("").map((c) => c.charCodeAt(0));
}

// node_modules/@planetscale/database/dist/version.js
var Version = "1.13.0";

// node_modules/@planetscale/database/dist/index.js
var DatabaseError = class extends Error {
  constructor(message2, status, body) {
    super(message2);
    this.status = status;
    this.name = "DatabaseError";
    this.body = body;
  }
};
var Tx = class {
  constructor(conn) {
    this.conn = conn;
  }
  async execute(query, args = null, options = { as: "object" }) {
    return this.conn.execute(query, args, options);
  }
};
function protocol(protocol2) {
  return protocol2 === "http:" ? protocol2 : "https:";
}
function buildURL(url) {
  const scheme = `${protocol(url.protocol)}//`;
  return new URL(url.pathname, `${scheme}${url.host}`).toString();
}
var Connection = class _Connection {
  constructor(config) {
    var _a;
    this.session = null;
    this.config = { ...config };
    if (typeof fetch !== "undefined") {
      (_a = this.config).fetch || (_a.fetch = fetch);
    }
    if (config.url) {
      const url = new URL(config.url);
      this.config.username = url.username;
      this.config.password = url.password;
      this.config.host = url.hostname;
      this.url = buildURL(url);
    } else {
      this.url = new URL(`https://${this.config.host}`).toString();
    }
  }
  async transaction(fn) {
    const conn = new _Connection(this.config);
    const tx = new Tx(conn);
    try {
      await tx.execute("BEGIN");
      const res = await fn(tx);
      await tx.execute("COMMIT");
      return res;
    } catch (err) {
      await tx.execute("ROLLBACK");
      throw err;
    }
  }
  async refresh() {
    await this.createSession();
  }
  async execute(query, args = null, options = { as: "object" }) {
    const url = new URL("/psdb.v1alpha1.Database/Execute", this.url);
    const formatter = this.config.format || format;
    const sql = args ? formatter(query, args) : query;
    const saved = await postJSON(this.config, url, { query: sql, session: this.session });
    const { result, session, error, timing } = saved;
    if (session) {
      this.session = session;
    }
    if (error) {
      throw new DatabaseError(error.message, 400, error);
    }
    const rowsAffected = result?.rowsAffected ? parseInt(result.rowsAffected, 10) : 0;
    const insertId = result?.insertId ?? "0";
    const fields = result?.fields ?? [];
    for (const field of fields) {
      field.type || (field.type = "NULL");
    }
    const castFn = options.cast || this.config.cast || cast;
    const rows = result ? parse(result, castFn, options.as || "object") : [];
    const headers = fields.map((f) => f.name);
    const typeByName = (acc, { name, type }) => ({ ...acc, [name]: type });
    const types2 = fields.reduce(typeByName, {});
    const timingSeconds = timing ?? 0;
    return {
      headers,
      types: types2,
      fields,
      rows,
      rowsAffected,
      insertId,
      size: rows.length,
      statement: sql,
      time: timingSeconds * 1e3
    };
  }
  async createSession() {
    const url = new URL("/psdb.v1alpha1.Database/CreateSession", this.url);
    const { session } = await postJSON(this.config, url);
    this.session = session;
    return session;
  }
};
async function postJSON(config, url, body = {}) {
  const auth = btoa(`${config.username}:${config.password}`);
  const { fetch: fetch2 } = config;
  const response = await fetch2(url.toString(), {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "User-Agent": `database-js/${Version}`,
      Authorization: `Basic ${auth}`
    },
    cache: "no-store"
  });
  if (response.ok) {
    return await response.json();
  } else {
    let error = null;
    try {
      const e = (await response.json()).error;
      error = new DatabaseError(e.message, response.status, e);
    } catch {
      error = new DatabaseError(response.statusText, response.status, {
        code: "internal",
        message: response.statusText
      });
    }
    throw error;
  }
}
function connect(config) {
  return new Connection(config);
}
function parseArrayRow(fields, rawRow, cast2) {
  const row = decodeRow(rawRow);
  return fields.map((field, ix) => {
    return cast2(field, row[ix]);
  });
}
function parseObjectRow(fields, rawRow, cast2) {
  const row = decodeRow(rawRow);
  return fields.reduce((acc, field, ix) => {
    acc[field.name] = cast2(field, row[ix]);
    return acc;
  }, {});
}
function parse(result, cast2, returnAs) {
  const fields = result.fields;
  const rows = result.rows ?? [];
  return rows.map((row) => returnAs === "array" ? parseArrayRow(fields, row, cast2) : parseObjectRow(fields, row, cast2));
}
function decodeRow(row) {
  const values = row.values ? atob(row.values) : "";
  let offset = 0;
  return row.lengths.map((size) => {
    const width = parseInt(size, 10);
    if (width < 0)
      return null;
    const splice = values.substring(offset, offset + width);
    offset += width;
    return splice;
  });
}
function cast(field, value) {
  if (value === "" || value == null) {
    return value;
  }
  switch (field.type) {
    case "INT8":
    case "INT16":
    case "INT24":
    case "INT32":
    case "UINT8":
    case "UINT16":
    case "UINT24":
    case "UINT32":
    case "YEAR":
      return parseInt(value, 10);
    case "FLOAT32":
    case "FLOAT64":
      return parseFloat(value);
    case "DECIMAL":
    case "INT64":
    case "UINT64":
    case "DATE":
    case "TIME":
    case "DATETIME":
    case "TIMESTAMP":
    case "BLOB":
    case "BIT":
    case "VARBINARY":
    case "BINARY":
    case "GEOMETRY":
      return value;
    case "JSON":
      return JSON.parse(decode(value));
    default:
      return decode(value);
  }
}

// src/database.ts
var connectToPlanetScale = (store) => {
  const DBConfig = {
    host: store.env.DATABASE_HOST,
    username: store.env.DATABASE_USERNAME,
    password: store.env.DATABASE_PASSWORD,
    fetch: (url, init) => {
      delete init["cache"];
      return fetch(url, init);
    }
  };
  return connect(DBConfig);
};
var fetchAllPosts = async (store, cat) => {
  let conn = connectToPlanetScale(store);
  let result = await conn.execute(`
        SELECT
            slug,
            category_id,
            title,
            thumb,
            digs_count,
            buries_count,
            comments_count,
            saves_count,
            created_at,
            archived_at,
            deleted_at,
            Score,
            Recency,
            (Score > 100 AND Recency > 90) AS is_trending,
            Score / Recency * 100 AS Decayed_Score
        FROM (
            SELECT
                *,
                (0.4 * digs_count + 0.3 * comments_count + 0.2 * saves_count) AS Score,
                (100 * LOG(2 + (UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(created_at)) / 3600)) AS Recency
            FROM posts
            WHERE 
                deleted_at IS NULL
                ${cat ? " AND category_id = " + cat : ""}
        ) AS subquery
        ORDER BY Decayed_Score DESC
        LIMIT 10;`);
  return result.rows;
};
var checkIfUserBlocked = async (store, id) => {
  let conn = connectToPlanetScale(store);
  let result = await conn.execute("select user_oauth_id from blocked_users where user_oauth_id = :id", { id });
  return result;
};
var fetchSpecificPostById = async (store) => {
  let conn = connectToPlanetScale(store);
  let result = await conn.execute("select * from posts where slug=:slug", { slug: store.req.slug });
  return result;
};
var getGoogleUserFromDB = async (store, userid) => {
  let conn = connectToPlanetScale(store);
  let result = await conn.execute(
    `
        select id, slug, name, thumb, honorific, flair, role, level, stars, creds, gil from users where google_id=?`,
    [userid]
  );
  return result;
};
var addGoogleUserToDB = async (store, user) => {
  let conn = connectToPlanetScale(store);
  let result = await conn.execute(
    `
        insert into users 
        (id, slug, name, thumb, honorific, flair, role, level, stars, creds, gil, google_id) 
        values 
        (?, ?, ?, ? , ?, ?, ?, ?, ?, ?, ?, ?)`,
    [user.id, user.slug, user.name, user.thumb, user.honorific, user.flair, user.role, user.level, user.stars, user.creds, user.gil, user.google_id]
  );
  return result;
};
var addNewSession = async (store, sessionId, userId, userAgent) => {
  let conn = connectToPlanetScale(store);
  let result = await conn.execute(
    `
        insert into sessions 
        (session_id, user_id, user_agent) 
        values 
        (?, ?, ?)`,
    [sessionId, userId, userAgent]
  );
  return result;
};

// src/views/sidepanel.ts
var SideCard = async (store) => {
  const data = await fetchAllPosts(store);
  let postsList = "";
  for (var post of data) {
    postsList += /*html*/
    `<li>
            <a href="/p/${post.slug}">                                
                <div class="flex flex-col p-2 bg-warning rounded">
                    <span class="countdown text-warning-content">
                        <span style="--value:${post.digs_count};"></span>
                    </span>
                </div>
                <span class="line-clamp-2 items-center text-neutral-content">
                    <span class="badge badge-sm mx-1">Tech</span>
                    <span class="text-sm prose prose-sm max-w-none"> ${post.title}</span>
                </span>
            </a>
        </li>`;
  }
  return (
    /*html*/
    `
    <ul class="menu bg-base-200 border border-base-300 shadow-xl rounded-box mr-12 divide-y divide-base-300">
        <li class="menu-title">Top 10 Posts</li>
        ${postsList}
    </ul>
   `
  );
};

// src/views/generateHTML.ts
var generateHTML = async (store) => {
  store.res.content = /*html*/
  `
<!DOCTYPE html>
<html lang="en" data-theme="darksun">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>${store.page.title}</title>
    <link rel="icon" type="image/x-icon" href="/pub/favicon.ico">

    <head prefix="og: http://ogp.me/ns#">
        <meta property="og:type" content="article">
        <meta property="og:title" content="${store.page.title}">
        <meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content="">
        <meta property="og:image" content="">

        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:image:alt" content="Get from SEO newbie to SEO pro in 8 simple steps.">
        <meta property="og:video:type" content="video/mp4">
        <meta property="og:video:width" content="640">
        <meta property="og:video:height" content="360">

        <meta name="description" content="${store.page.descr}">
        <meta name="keywords" content="">
        <meta name="author" content="">

        <link href="/pub/styles.css" rel="stylesheet" type="text/css" />

    </head>

<body class="">
    <noscript>You need to enable JavaScript to run this app.</noscript>

    <main class="min-h-screen">

        <div class="drawer lg:drawer-open">
            <input id="left-drawer-trigger" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <div class="flex">

                    <div class="min-w-xs w-full lg:basis-2/3 flex flex-col lg:px-4 lg:pt-10">
                        ${await Header(store)}
                        ${store.page.html}
                    </div>
                    <div class="basis-1/3 hidden lg:flex lg:flex-col gap-4 pt-48 mt-2">
                        ${await SideCard(store)}
                        ${await SideCard(store)}
                    </div>
                </div>
            </div>
            ${await Drawer()}
            ${await LoginModal(store)}
            ${await FREModal(store)}
            ${await Alerts(store)}
            ${await Toasts(store)}
        </div>
    </main>

    ${await Footer()}
    ${await Floaters()}

    <script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js" async defer><\/script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pace-js@latest/pace-theme-default.min.css" async defer>

    <script>
        //--------------------------------------------------
        //  Define Store. The clientside context will be stored here 
        //--------------------------------------------------
        let store = {}

        //--------------------------------------------------
        //  Create a Map of the cookies for easy access
        //--------------------------------------------------
        const parseCookies = (cookieString) => {
            let cookiesMap = {}
            if (cookieString) {
                let cookies = cookieString.split(';')
                for (let cookie of cookies) {
                    let [name, value] = cookie.split('=')
                    cookiesMap[name.trim()] = value
                }
            }
            return cookiesMap
        }

        store.cookies = parseCookies(document.cookie)
        console.log("Cookies :")
        console.log(JSON.stringify(store.cookies, null, 2))

        //--------------------------------------------------
        //  Trigger Client side actions based on cookie values
        //--------------------------------------------------
        if (store.cookies['D_NEW_SESSION']) {
            // delete the cookie
            document.cookie = "D_NEW_SESSION=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            
        
            // Set all user details on localstorage
            localStorage.setItem('D_USER_SLUG', store.cookies['D_USLUG'])
            localStorage.setItem('D_USER_NAME', store.cookies['D_UNAME'])
            localStorage.setItem('D_USER_HONORIFIC', store.cookies['D_UHONORIFIC'])
            localStorage.setItem('D_USER_THUMB', store.cookies['D_UTHUMB'])
            localStorage.setItem('D_USER_FLAIR', store.cookies['D_UFLAIR'])
            localStorage.setItem('D_USER_ROLE', store.cookies['D_UROLE'])
            localStorage.setItem('D_USER_LEVEL', store.cookies['D_ULEVEL'])
            localStorage.setItem('D_USER_STARS', store.cookies['D_USTARS'])
            localStorage.setItem('D_USER_CREDS', store.cookies['D_UCREDS'])
            localStorage.setItem('D_USER_GIL', store.cookies['D_UGIL'])

            // and eat the cookies!!
            document.cookie = "D_USLUG=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "D_UNAME=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "D_UHONORIFIC=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "D_UTHUMB=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "D_UFLAIR=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "D_UROLE=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "D_ULEVEL=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "D_USTARS=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "D_UCREDS=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "D_UGIL=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

            // TODO - Stupid bug fix because I cant read the cookies from 
            // the clientside without making a top level request
            // reload page
            window.location.reload(true);

            triggerToast("success", store.cookies["D_TOAST_SUCCESS"]);
            document.cookie = "D_TOAST_SUCCESS=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            
        } else if (store.cookies["D_MODAL_FRE"]) {
            document.cookie = "D_MODAL_FRE=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            freModal.showModal();
        }
    <\/script>

</html>
`;
};

// src/handlers/sayHello.ts
var sayHello = async (store) => {
  store.res.content = JSON.stringify({ message: "Hello from the API" });
};

// src/handlers/logout.ts
var logout = async (store) => {
  store.res.headers.append("Set-Cookie", `D_UID=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`);
  store.res.headers.append("Set-Cookie", `D_USLUG=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`);
  store.res.headers.append("Set-Cookie", `D_UNAME=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`);
  store.res.headers.append("Set-Cookie", `D_UHONORIFIC=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`);
  store.res.headers.append("Set-Cookie", `D_UTHUMB=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`);
  store.res.headers.append("Set-Cookie", `D_UFLAIR=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`);
  store.res.headers.append("Set-Cookie", `D_UROLE=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`);
  store.res.headers.append("Set-Cookie", `D_ULEVEL=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`);
  store.res.headers.append("Set-Cookie", `D_USTARS=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`);
  store.res.headers.append("Set-Cookie", `D_UCREDS=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`);
  store.res.headers.append("Set-Cookie", `D_UGIL=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`);
  store.res.headers.append("Set-Cookie", `D_TOAST_SUCCESS=You have been logged out;    path=/; SameSite=Strict;`);
  store.res.status = 302;
  store.res.headers.append("Location", "/");
};

// src/handlers/buildAboutPage.ts
var buildAboutPage = async (store) => {
  store.page.title = "META: About Page";
  store.page.descr = "META: This is the about page";
  store.page.html = /*html*/
  `
        <article class="">
            <h1>ABOUT Page</h1>
        </article>
        `;
};

// src/views/filters.ts
var Filters = () => {
  return (
    /*html*/
    `
    <div class="h-20 items-center flex justify-between">

        <div class="dropdown dropdown-bottom">
            <label tabindex="0" class="btn btn-ghost rounded-l-none w-36">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 lg:w-6 lg:h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                </svg>
                <span>All</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>                     
            </label>
            <ul tabindex="0" class="dropdown-content z-10 menu p-4 shadow-xl rounded-box border border-base-300 bg-base-200 w-52 gap-1 lg:gap-2">
                <li><a class="active">All</a></li>
                <li><a>Meta</a></li>
                <li><a>Science & Tech</a></li>
                <li><a>Gaming</a></li>
                <li><a>World News</a></li>
                <li><a>Sports</a></li>
                <li><a>Business</a></li>
                <li><a>Lifestyle</a></li>
                <li><a>Entertainment</a></li>
                <li><a>Funny</a></li>
                <li><a>Cute Stuff</a></li>
        
                <li><a>Everything Else</a></li>
            </ul>
        </div>

        <span class="btn btn-disabled text-white hidden lg:flex grow">
            Hey Dingbat, what will you dig up today?
        </span>

        <div class="dropdown dropdown-bottom dropdown-end">
            <label tabindex="0" class="btn btn-ghost rounded-r-none w-36">
            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>
                <span>Magic</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </label>
            <ul tabindex="0" class="dropdown-content z-10 menu p-4 shadow-xl rounded-box border border-base-300 bg-base-200 w-52">
                <li><a class="active">Magic</a></li>
                <li><a>Digs</a></li>
                <li><a>Discussions</a></li>
                <li><a>Trending</a></li>
                <li><a>Latest</a></li>
            </ul>
        </div>
    </div>
    `
  );
};

// src/views/postCard.ts
var PostCard = (post) => {
  return (
    /*html*/
    `
    <!-- Post Card -->
    <article class="flex lg:rounded-box border border-base-300 bg-base-200 gap-1 lg:gap-2">

        <!-- Dig Btn section-->
        <div class="flex-none flex flex-col justify-between w-12 lg:w-20 gap-1 lg:gap-2 ">
            <button class="grow btn btn-warning lg:btn-lg rounded-none rounded-br-btn lg:rounded-tl-box flex flex-col gap-1 p-0 lg:p-2 border border-base-100" onClick='this.classlist.toggle("btn-outline")'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" class="w-4 h-4 lg:w-6 lg:h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>
                
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                <!-- <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" class="w-4 h-4 lg:w-6 lg:h-6 ">
                    <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
                </svg> -->

                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                <!-- <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" class="w-4 h-4 lg:w-6 lg:h-6 stroke-error">

                        <path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z"/>
                </svg> -->

                <span>9999</span> 


            </button>

            <button class="btn btn-xs lg:btn-md rounded-none rounded-tr-btn lg:rounded-bl-box border border-base-100 border-l-none"> 
                <div class="flex items-center">
                
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden lg:block w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                    </svg>
                    Tech
                </div>
            </button>
        </div>

        <!-- Post Content Section -->
        <div class="grow flex flex-col">
            <div class="flex">
                <div class="avatar">
                    <div class=" w-16 lg:w-32">
                        <img src="https://picsum.photos/seed/${post.slug}/200/300" alt="" loading="lazy" decoding="async"/>
                    </div>
                </div>

                <div class="flex flex-col justify-between w-full">
                    <div>                    
                        <button class="float-right btn btn-xs lg:btn-sm rounded-t-none mr-2 lg:mr-4 border border-base-100"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                        </button>
                        <p class=" line-clamp-2 pl-2 lg:pl-4 pt-1 lg:pt-2">
                        
                            <span class="inline-flex items-baseline">
                                <img src="https://picsum.photos/seed/${post.slug}/100/100" class="h-5 lg:h-7 w-5 lg:w-7 self-center rounded-md border border-base-100" alt="" loading="lazy" decoding="async"/>
                                <span>&nbsp</span>
                            </span>
                            <span class="badge badge-xs lg:badge-md mr-1">
                            12 hr
                            </span>

                            <a href="/p/${post.slug}" class="text-sm lg:text-lg">R${post.title}</a>
                        </p>
                    </div>

                    <div class="flex items-end justify-between gap-0 lg:gap-4 pl-2 lg:pl-4 pt-1 lg:pt-2">

                        <button class="btn btn-xs relative flex items-center overflow-hidden shadow-lg lg:btn-md rounded-b-none border border-base-100">
                            <img class="absolute -left-2 w-10 rounded-r-full shadow-lg lg:w-16" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                            <div class="w-28 pl-8 lg:w-48 lg:pl-12">
                                <div class="truncate">
                                    Andrew Alfred Dingus Berrius
                                </div>
                            </div>
                        </button>

                        <div class="flex items-end">
                                        
                            <a href="/p/${post.slug}" class="btn btn-xs lg:btn-md ml-1 lg:ml-2 btn-neutral rounded-none lg:rounded-br-box rounded-tl-btn w-16 lg:w-36 p-0 ">
                                <span>9.9k</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                </svg>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>


    `
  );
};

// src/handlers/buildHomePage.ts
var buildHomePage = async (store) => {
  store.page.title = "Home Page";
  store.page.descr = "This is the Home page";
  const data = await fetchAllPosts(store);
  let postsList = "";
  for (var item of data) {
    postsList += await PostCard(item);
  }
  store.page.html = /*html*/
  `
        <div class="">
            ${Filters()}
       
            <div class="flex flex-col lg:gap-4 gap-1">
                ${postsList}
            </div>

            <div class="flex justify-between h-20 items-center">
                <button class="btn">Prev</button>
                <div class="join">
                    <button class="join-item btn">1</button>
                    <button class="join-item btn btn-active">2</button>
                    <button class="join-item btn">3</button>
                    <button class="join-item btn">4</button>
                </div>
                <button class="btn">Next</button>
            </div>

        </div>
    `;
};

// src/views/comment.ts
var Comment = async (post) => {
  return (
    /*html*/
    `
    <article name="article" class="bg-base-200 border border-base-300 rounded-box w-full shadow-xl">
        <div class="rounded-box border-l-2 border-warning">
            <figure class="border-b border-base-300 rounded-t-box">
                <img src="https://picsum.photos/seed/picsum/500/300" class="rounded-t-box w-full object-cover" alt="Shoes"/>
            </figure>
            <div class="flex flex-col px-4 lg:px-8">
                
                <div class="flex gap-2 lg:gap-4 py-2 lg:py-4 border-b border-base-300">                    
                    
                    <p class="self-top line-clamp-3 font-medium text-lg lg:text-2xl">
                        <span class="inline-flex items-baseline">
                            <img src="https://picsum.photos/seed/11/100/100" alt="" class="w-4 h-4 lg:w-8 lg:h-8 rounded mx-1" />
                        </span>
                        <a href="/p/${post.slug}" class="">${post.title}</a>
                    </p>

                </div>

                <div class="flex justify-between py-2 lg:py-4 border-b border-base-300">      
                    <div class="flex gap-1">
                        <button class="btn btn-sm lg:btn-md btn-outline btn-warning">                                    
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" class="w-4 h-4 lg:w-6 lg:h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                            </svg>
                            <span>9909</span>
                        <button>
                        <button class="btn btn-sm lg:btn-md join-item border border-base-100"> 
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                                </svg>
                                Tech
                            </div>
                        </button>
                    </div>
                    <button class="btn btn-sm relative flex items-center overflow-hidden shadow-lg lg:btn-md border border-base-100">
                        <img class="absolute -left-2 w-10 rounded-r-full shadow-lg lg:w-16" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                        <div class="w-28 pl-8 lg:w-48 lg:pl-12">
                            <div class="truncate">
                                Andrew Alfred Dingus Berrius
                            </div>
                        </div>
                    </button>
                </div>

                <div class="py-2 lg:py-4 border-b border-base-300">                         

                    <p class="prose lg:prose-lg max-w-none">
                        <span class="badge">12 hrs ago</span>
                        ${post.content}
                    </p>
                </div>
                <div class="flex justify-end py-2 lg:py-4 ">
                    <button class="btn btn-error btn-outline btn-sm ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                        Reply
                    </button>
                    <button class="btn btn-ghost btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                        </svg>
                    </button>
                    <button class="btn btn-ghost btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                    </button>
                    <button class="btn btn-ghost btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                        </svg>
                    </button>

                    <button class="btn btn-ghost btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </article>
`
  );
};

// src/handlers/buildPostDetailsPage.ts
var buildPostDetailsPage = async (store) => {
  store.page.title = `Post Page`;
  store.page.descr = `This is the Post - ${store.req.slug}`;
  const result = await fetchSpecificPostById(store);
  if (result.size == 0) {
    let err = new Error();
    err.message = "404";
    err.cause = "this id doesn't exists in the db";
    throw err;
  }
  let post = result.rows[0];
  console.log(post);
  store.page.html = /*html*/
  `
    <div class="flex flex-col gap-4">
        <section>
            ${Filters()}
            ${await Comment(post)}
            
        </section>
        <section name="comments">
            ${await Comment(post)}
        </section>
    </div>

`;
};

// node_modules/jose/dist/browser/runtime/webcrypto.js
var webcrypto_default = crypto;
var isCryptoKey = (key) => key instanceof CryptoKey;

// node_modules/jose/dist/browser/runtime/digest.js
var digest = async (algorithm, data) => {
  const subtleDigest = `SHA-${algorithm.slice(-3)}`;
  return new Uint8Array(await webcrypto_default.subtle.digest(subtleDigest, data));
};
var digest_default = digest;

// node_modules/jose/dist/browser/lib/buffer_utils.js
var encoder = new TextEncoder();
var decoder2 = new TextDecoder();
var MAX_INT32 = 2 ** 32;
function concat(...buffers) {
  const size = buffers.reduce((acc, { length }) => acc + length, 0);
  const buf = new Uint8Array(size);
  let i = 0;
  buffers.forEach((buffer) => {
    buf.set(buffer, i);
    i += buffer.length;
  });
  return buf;
}
function p2s(alg, p2sInput) {
  return concat(encoder.encode(alg), new Uint8Array([0]), p2sInput);
}
function writeUInt32BE(buf, value, offset) {
  if (value < 0 || value >= MAX_INT32) {
    throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
  }
  buf.set([value >>> 24, value >>> 16, value >>> 8, value & 255], offset);
}
function uint64be(value) {
  const high = Math.floor(value / MAX_INT32);
  const low = value % MAX_INT32;
  const buf = new Uint8Array(8);
  writeUInt32BE(buf, high, 0);
  writeUInt32BE(buf, low, 4);
  return buf;
}
function uint32be(value) {
  const buf = new Uint8Array(4);
  writeUInt32BE(buf, value);
  return buf;
}
function lengthAndInput(input) {
  return concat(uint32be(input.length), input);
}
async function concatKdf(secret, bits, value) {
  const iterations = Math.ceil((bits >> 3) / 32);
  const res = new Uint8Array(iterations * 32);
  for (let iter = 0; iter < iterations; iter++) {
    const buf = new Uint8Array(4 + secret.length + value.length);
    buf.set(uint32be(iter + 1));
    buf.set(secret, 4);
    buf.set(value, 4 + secret.length);
    res.set(await digest_default("sha256", buf), iter * 32);
  }
  return res.slice(0, bits >> 3);
}

// node_modules/jose/dist/browser/runtime/base64url.js
var decodeBase64 = (encoded) => {
  const binary = atob(encoded);
  const bytes2 = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes2[i] = binary.charCodeAt(i);
  }
  return bytes2;
};
var decode2 = (input) => {
  let encoded = input;
  if (encoded instanceof Uint8Array) {
    encoded = decoder2.decode(encoded);
  }
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
  try {
    return decodeBase64(encoded);
  } catch {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
};

// node_modules/jose/dist/browser/util/errors.js
var JOSEError = class extends Error {
  static get code() {
    return "ERR_JOSE_GENERIC";
  }
  constructor(message2) {
    super(message2);
    this.code = "ERR_JOSE_GENERIC";
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, this.constructor);
  }
};
var JWTClaimValidationFailed = class extends JOSEError {
  static get code() {
    return "ERR_JWT_CLAIM_VALIDATION_FAILED";
  }
  constructor(message2, claim = "unspecified", reason = "unspecified") {
    super(message2);
    this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    this.claim = claim;
    this.reason = reason;
  }
};
var JWTExpired = class extends JOSEError {
  static get code() {
    return "ERR_JWT_EXPIRED";
  }
  constructor(message2, claim = "unspecified", reason = "unspecified") {
    super(message2);
    this.code = "ERR_JWT_EXPIRED";
    this.claim = claim;
    this.reason = reason;
  }
};
var JOSEAlgNotAllowed = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
  }
  static get code() {
    return "ERR_JOSE_ALG_NOT_ALLOWED";
  }
};
var JOSENotSupported = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JOSE_NOT_SUPPORTED";
  }
  static get code() {
    return "ERR_JOSE_NOT_SUPPORTED";
  }
};
var JWEDecryptionFailed = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWE_DECRYPTION_FAILED";
    this.message = "decryption operation failed";
  }
  static get code() {
    return "ERR_JWE_DECRYPTION_FAILED";
  }
};
var JWEInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWE_INVALID";
  }
  static get code() {
    return "ERR_JWE_INVALID";
  }
};
var JWSInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWS_INVALID";
  }
  static get code() {
    return "ERR_JWS_INVALID";
  }
};
var JWTInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWT_INVALID";
  }
  static get code() {
    return "ERR_JWT_INVALID";
  }
};
var JWKSInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWKS_INVALID";
  }
  static get code() {
    return "ERR_JWKS_INVALID";
  }
};
var JWKSNoMatchingKey = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWKS_NO_MATCHING_KEY";
    this.message = "no applicable key found in the JSON Web Key Set";
  }
  static get code() {
    return "ERR_JWKS_NO_MATCHING_KEY";
  }
};
var JWKSMultipleMatchingKeys = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
    this.message = "multiple matching keys found in the JSON Web Key Set";
  }
  static get code() {
    return "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
  }
};
var JWKSTimeout = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWKS_TIMEOUT";
    this.message = "request timed out";
  }
  static get code() {
    return "ERR_JWKS_TIMEOUT";
  }
};
var JWSSignatureVerificationFailed = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    this.message = "signature verification failed";
  }
  static get code() {
    return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  }
};

// node_modules/jose/dist/browser/runtime/random.js
var random_default = webcrypto_default.getRandomValues.bind(webcrypto_default);

// node_modules/jose/dist/browser/lib/iv.js
function bitLength(alg) {
  switch (alg) {
    case "A128GCM":
    case "A128GCMKW":
    case "A192GCM":
    case "A192GCMKW":
    case "A256GCM":
    case "A256GCMKW":
      return 96;
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      return 128;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
  }
}

// node_modules/jose/dist/browser/lib/check_iv_length.js
var checkIvLength = (enc, iv) => {
  if (iv.length << 3 !== bitLength(enc)) {
    throw new JWEInvalid("Invalid Initialization Vector length");
  }
};
var check_iv_length_default = checkIvLength;

// node_modules/jose/dist/browser/runtime/check_cek_length.js
var checkCekLength = (cek, expected) => {
  const actual = cek.byteLength << 3;
  if (actual !== expected) {
    throw new JWEInvalid(`Invalid Content Encryption Key length. Expected ${expected} bits, got ${actual} bits`);
  }
};
var check_cek_length_default = checkCekLength;

// node_modules/jose/dist/browser/runtime/timing_safe_equal.js
var timingSafeEqual = (a, b) => {
  if (!(a instanceof Uint8Array)) {
    throw new TypeError("First argument must be a buffer");
  }
  if (!(b instanceof Uint8Array)) {
    throw new TypeError("Second argument must be a buffer");
  }
  if (a.length !== b.length) {
    throw new TypeError("Input buffers must have the same length");
  }
  const len = a.length;
  let out = 0;
  let i = -1;
  while (++i < len) {
    out |= a[i] ^ b[i];
  }
  return out === 0;
};
var timing_safe_equal_default = timingSafeEqual;

// node_modules/jose/dist/browser/lib/crypto_key.js
function unusable(name, prop = "algorithm.name") {
  return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
  return algorithm.name === name;
}
function getHashLength(hash) {
  return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve(alg) {
  switch (alg) {
    case "ES256":
      return "P-256";
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
function checkUsage(key, usages) {
  if (usages.length && !usages.some((expected) => key.usages.includes(expected))) {
    let msg = "CryptoKey does not support this operation, its usages must include ";
    if (usages.length > 2) {
      const last = usages.pop();
      msg += `one of ${usages.join(", ")}, or ${last}.`;
    } else if (usages.length === 2) {
      msg += `one of ${usages[0]} or ${usages[1]}.`;
    } else {
      msg += `${usages[0]}.`;
    }
    throw new TypeError(msg);
  }
}
function checkSigCryptoKey(key, alg, ...usages) {
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512": {
      if (!isAlgorithm(key.algorithm, "HMAC"))
        throw unusable("HMAC");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "RS256":
    case "RS384":
    case "RS512": {
      if (!isAlgorithm(key.algorithm, "RSASSA-PKCS1-v1_5"))
        throw unusable("RSASSA-PKCS1-v1_5");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "PS256":
    case "PS384":
    case "PS512": {
      if (!isAlgorithm(key.algorithm, "RSA-PSS"))
        throw unusable("RSA-PSS");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "EdDSA": {
      if (key.algorithm.name !== "Ed25519" && key.algorithm.name !== "Ed448") {
        throw unusable("Ed25519 or Ed448");
      }
      break;
    }
    case "ES256":
    case "ES384":
    case "ES512": {
      if (!isAlgorithm(key.algorithm, "ECDSA"))
        throw unusable("ECDSA");
      const expected = getNamedCurve(alg);
      const actual = key.algorithm.namedCurve;
      if (actual !== expected)
        throw unusable(expected, "algorithm.namedCurve");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key, usages);
}
function checkEncCryptoKey(key, alg, ...usages) {
  switch (alg) {
    case "A128GCM":
    case "A192GCM":
    case "A256GCM": {
      if (!isAlgorithm(key.algorithm, "AES-GCM"))
        throw unusable("AES-GCM");
      const expected = parseInt(alg.slice(1, 4), 10);
      const actual = key.algorithm.length;
      if (actual !== expected)
        throw unusable(expected, "algorithm.length");
      break;
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      if (!isAlgorithm(key.algorithm, "AES-KW"))
        throw unusable("AES-KW");
      const expected = parseInt(alg.slice(1, 4), 10);
      const actual = key.algorithm.length;
      if (actual !== expected)
        throw unusable(expected, "algorithm.length");
      break;
    }
    case "ECDH": {
      switch (key.algorithm.name) {
        case "ECDH":
        case "X25519":
        case "X448":
          break;
        default:
          throw unusable("ECDH, X25519, or X448");
      }
      break;
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW":
      if (!isAlgorithm(key.algorithm, "PBKDF2"))
        throw unusable("PBKDF2");
      break;
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      if (!isAlgorithm(key.algorithm, "RSA-OAEP"))
        throw unusable("RSA-OAEP");
      const expected = parseInt(alg.slice(9), 10) || 1;
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key, usages);
}

// node_modules/jose/dist/browser/lib/invalid_key_input.js
function message(msg, actual, ...types2) {
  if (types2.length > 2) {
    const last = types2.pop();
    msg += `one of type ${types2.join(", ")}, or ${last}.`;
  } else if (types2.length === 2) {
    msg += `one of type ${types2[0]} or ${types2[1]}.`;
  } else {
    msg += `of type ${types2[0]}.`;
  }
  if (actual == null) {
    msg += ` Received ${actual}`;
  } else if (typeof actual === "function" && actual.name) {
    msg += ` Received function ${actual.name}`;
  } else if (typeof actual === "object" && actual != null) {
    if (actual.constructor && actual.constructor.name) {
      msg += ` Received an instance of ${actual.constructor.name}`;
    }
  }
  return msg;
}
var invalid_key_input_default = (actual, ...types2) => {
  return message("Key must be ", actual, ...types2);
};
function withAlg(alg, actual, ...types2) {
  return message(`Key for the ${alg} algorithm must be `, actual, ...types2);
}

// node_modules/jose/dist/browser/runtime/is_key_like.js
var is_key_like_default = (key) => {
  return isCryptoKey(key);
};
var types = ["CryptoKey"];

// node_modules/jose/dist/browser/runtime/decrypt.js
async function cbcDecrypt(enc, cek, ciphertext, iv, tag, aad) {
  if (!(cek instanceof Uint8Array)) {
    throw new TypeError(invalid_key_input_default(cek, "Uint8Array"));
  }
  const keySize = parseInt(enc.slice(1, 4), 10);
  const encKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(keySize >> 3), "AES-CBC", false, ["decrypt"]);
  const macKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(0, keySize >> 3), {
    hash: `SHA-${keySize << 1}`,
    name: "HMAC"
  }, false, ["sign"]);
  const macData = concat(aad, iv, ciphertext, uint64be(aad.length << 3));
  const expectedTag = new Uint8Array((await webcrypto_default.subtle.sign("HMAC", macKey, macData)).slice(0, keySize >> 3));
  let macCheckPassed;
  try {
    macCheckPassed = timing_safe_equal_default(tag, expectedTag);
  } catch {
  }
  if (!macCheckPassed) {
    throw new JWEDecryptionFailed();
  }
  let plaintext;
  try {
    plaintext = new Uint8Array(await webcrypto_default.subtle.decrypt({ iv, name: "AES-CBC" }, encKey, ciphertext));
  } catch {
  }
  if (!plaintext) {
    throw new JWEDecryptionFailed();
  }
  return plaintext;
}
async function gcmDecrypt(enc, cek, ciphertext, iv, tag, aad) {
  let encKey;
  if (cek instanceof Uint8Array) {
    encKey = await webcrypto_default.subtle.importKey("raw", cek, "AES-GCM", false, ["decrypt"]);
  } else {
    checkEncCryptoKey(cek, enc, "decrypt");
    encKey = cek;
  }
  try {
    return new Uint8Array(await webcrypto_default.subtle.decrypt({
      additionalData: aad,
      iv,
      name: "AES-GCM",
      tagLength: 128
    }, encKey, concat(ciphertext, tag)));
  } catch {
    throw new JWEDecryptionFailed();
  }
}
var decrypt = async (enc, cek, ciphertext, iv, tag, aad) => {
  if (!isCryptoKey(cek) && !(cek instanceof Uint8Array)) {
    throw new TypeError(invalid_key_input_default(cek, ...types, "Uint8Array"));
  }
  check_iv_length_default(enc, iv);
  switch (enc) {
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      if (cek instanceof Uint8Array)
        check_cek_length_default(cek, parseInt(enc.slice(-3), 10));
      return cbcDecrypt(enc, cek, ciphertext, iv, tag, aad);
    case "A128GCM":
    case "A192GCM":
    case "A256GCM":
      if (cek instanceof Uint8Array)
        check_cek_length_default(cek, parseInt(enc.slice(1, 4), 10));
      return gcmDecrypt(enc, cek, ciphertext, iv, tag, aad);
    default:
      throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
  }
};
var decrypt_default = decrypt;

// node_modules/jose/dist/browser/lib/is_disjoint.js
var isDisjoint = (...headers) => {
  const sources = headers.filter(Boolean);
  if (sources.length === 0 || sources.length === 1) {
    return true;
  }
  let acc;
  for (const header of sources) {
    const parameters = Object.keys(header);
    if (!acc || acc.size === 0) {
      acc = new Set(parameters);
      continue;
    }
    for (const parameter of parameters) {
      if (acc.has(parameter)) {
        return false;
      }
      acc.add(parameter);
    }
  }
  return true;
};
var is_disjoint_default = isDisjoint;

// node_modules/jose/dist/browser/lib/is_object.js
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
function isObject(input) {
  if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
}

// node_modules/jose/dist/browser/runtime/bogus.js
var bogusWebCrypto = [
  { hash: "SHA-256", name: "HMAC" },
  true,
  ["sign"]
];
var bogus_default = bogusWebCrypto;

// node_modules/jose/dist/browser/runtime/aeskw.js
function checkKeySize(key, alg) {
  if (key.algorithm.length !== parseInt(alg.slice(1, 4), 10)) {
    throw new TypeError(`Invalid key size for alg: ${alg}`);
  }
}
function getCryptoKey(key, alg, usage) {
  if (isCryptoKey(key)) {
    checkEncCryptoKey(key, alg, usage);
    return key;
  }
  if (key instanceof Uint8Array) {
    return webcrypto_default.subtle.importKey("raw", key, "AES-KW", true, [usage]);
  }
  throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
}
var unwrap = async (alg, key, encryptedKey) => {
  const cryptoKey = await getCryptoKey(key, alg, "unwrapKey");
  checkKeySize(cryptoKey, alg);
  const cryptoKeyCek = await webcrypto_default.subtle.unwrapKey("raw", encryptedKey, cryptoKey, "AES-KW", ...bogus_default);
  return new Uint8Array(await webcrypto_default.subtle.exportKey("raw", cryptoKeyCek));
};

// node_modules/jose/dist/browser/runtime/ecdhes.js
async function deriveKey(publicKey, privateKey, algorithm, keyLength, apu = new Uint8Array(0), apv = new Uint8Array(0)) {
  if (!isCryptoKey(publicKey)) {
    throw new TypeError(invalid_key_input_default(publicKey, ...types));
  }
  checkEncCryptoKey(publicKey, "ECDH");
  if (!isCryptoKey(privateKey)) {
    throw new TypeError(invalid_key_input_default(privateKey, ...types));
  }
  checkEncCryptoKey(privateKey, "ECDH", "deriveBits");
  const value = concat(lengthAndInput(encoder.encode(algorithm)), lengthAndInput(apu), lengthAndInput(apv), uint32be(keyLength));
  let length;
  if (publicKey.algorithm.name === "X25519") {
    length = 256;
  } else if (publicKey.algorithm.name === "X448") {
    length = 448;
  } else {
    length = Math.ceil(parseInt(publicKey.algorithm.namedCurve.substr(-3), 10) / 8) << 3;
  }
  const sharedSecret = new Uint8Array(await webcrypto_default.subtle.deriveBits({
    name: publicKey.algorithm.name,
    public: publicKey
  }, privateKey, length));
  return concatKdf(sharedSecret, keyLength, value);
}
function ecdhAllowed(key) {
  if (!isCryptoKey(key)) {
    throw new TypeError(invalid_key_input_default(key, ...types));
  }
  return ["P-256", "P-384", "P-521"].includes(key.algorithm.namedCurve) || key.algorithm.name === "X25519" || key.algorithm.name === "X448";
}

// node_modules/jose/dist/browser/lib/check_p2s.js
function checkP2s(p2s2) {
  if (!(p2s2 instanceof Uint8Array) || p2s2.length < 8) {
    throw new JWEInvalid("PBES2 Salt Input must be 8 or more octets");
  }
}

// node_modules/jose/dist/browser/runtime/pbes2kw.js
function getCryptoKey2(key, alg) {
  if (key instanceof Uint8Array) {
    return webcrypto_default.subtle.importKey("raw", key, "PBKDF2", false, ["deriveBits"]);
  }
  if (isCryptoKey(key)) {
    checkEncCryptoKey(key, alg, "deriveBits", "deriveKey");
    return key;
  }
  throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
}
async function deriveKey2(p2s2, alg, p2c, key) {
  checkP2s(p2s2);
  const salt = p2s(alg, p2s2);
  const keylen = parseInt(alg.slice(13, 16), 10);
  const subtleAlg = {
    hash: `SHA-${alg.slice(8, 11)}`,
    iterations: p2c,
    name: "PBKDF2",
    salt
  };
  const wrapAlg = {
    length: keylen,
    name: "AES-KW"
  };
  const cryptoKey = await getCryptoKey2(key, alg);
  if (cryptoKey.usages.includes("deriveBits")) {
    return new Uint8Array(await webcrypto_default.subtle.deriveBits(subtleAlg, cryptoKey, keylen));
  }
  if (cryptoKey.usages.includes("deriveKey")) {
    return webcrypto_default.subtle.deriveKey(subtleAlg, cryptoKey, wrapAlg, false, ["wrapKey", "unwrapKey"]);
  }
  throw new TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"');
}
var decrypt2 = async (alg, key, encryptedKey, p2c, p2s2) => {
  const derived = await deriveKey2(p2s2, alg, p2c, key);
  return unwrap(alg.slice(-6), derived, encryptedKey);
};

// node_modules/jose/dist/browser/runtime/subtle_rsaes.js
function subtleRsaEs(alg) {
  switch (alg) {
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      return "RSA-OAEP";
    default:
      throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  }
}

// node_modules/jose/dist/browser/runtime/check_key_length.js
var check_key_length_default = (alg, key) => {
  if (alg.startsWith("RS") || alg.startsWith("PS")) {
    const { modulusLength } = key.algorithm;
    if (typeof modulusLength !== "number" || modulusLength < 2048) {
      throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
    }
  }
};

// node_modules/jose/dist/browser/runtime/rsaes.js
var decrypt3 = async (alg, key, encryptedKey) => {
  if (!isCryptoKey(key)) {
    throw new TypeError(invalid_key_input_default(key, ...types));
  }
  checkEncCryptoKey(key, alg, "decrypt", "unwrapKey");
  check_key_length_default(alg, key);
  if (key.usages.includes("decrypt")) {
    return new Uint8Array(await webcrypto_default.subtle.decrypt(subtleRsaEs(alg), key, encryptedKey));
  }
  if (key.usages.includes("unwrapKey")) {
    const cryptoKeyCek = await webcrypto_default.subtle.unwrapKey("raw", encryptedKey, key, subtleRsaEs(alg), ...bogus_default);
    return new Uint8Array(await webcrypto_default.subtle.exportKey("raw", cryptoKeyCek));
  }
  throw new TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation');
};

// node_modules/jose/dist/browser/lib/cek.js
function bitLength2(alg) {
  switch (alg) {
    case "A128GCM":
      return 128;
    case "A192GCM":
      return 192;
    case "A256GCM":
    case "A128CBC-HS256":
      return 256;
    case "A192CBC-HS384":
      return 384;
    case "A256CBC-HS512":
      return 512;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
  }
}
var cek_default = (alg) => random_default(new Uint8Array(bitLength2(alg) >> 3));

// node_modules/jose/dist/browser/runtime/jwk_to_key.js
function subtleMapping(jwk) {
  let algorithm;
  let keyUsages;
  switch (jwk.kty) {
    case "RSA": {
      switch (jwk.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
          };
          keyUsages = jwk.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "EC": {
      switch (jwk.alg) {
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: "ECDH", namedCurve: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "OKP": {
      switch (jwk.alg) {
        case "EdDSA":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return { algorithm, keyUsages };
}
var parse2 = async (jwk) => {
  if (!jwk.alg) {
    throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
  }
  const { algorithm, keyUsages } = subtleMapping(jwk);
  const rest = [
    algorithm,
    jwk.ext ?? false,
    jwk.key_ops ?? keyUsages
  ];
  const keyData = { ...jwk };
  delete keyData.alg;
  delete keyData.use;
  return webcrypto_default.subtle.importKey("jwk", keyData, ...rest);
};
var jwk_to_key_default = parse2;

// node_modules/jose/dist/browser/key/import.js
async function importJWK(jwk, alg) {
  if (!isObject(jwk)) {
    throw new TypeError("JWK must be an object");
  }
  alg || (alg = jwk.alg);
  switch (jwk.kty) {
    case "oct":
      if (typeof jwk.k !== "string" || !jwk.k) {
        throw new TypeError('missing "k" (Key Value) Parameter value');
      }
      return decode2(jwk.k);
    case "RSA":
      if (jwk.oth !== void 0) {
        throw new JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
      }
    case "EC":
    case "OKP":
      return jwk_to_key_default({ ...jwk, alg });
    default:
      throw new JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
  }
}

// node_modules/jose/dist/browser/lib/check_key_type.js
var symmetricTypeCheck = (alg, key) => {
  if (key instanceof Uint8Array)
    return;
  if (!is_key_like_default(key)) {
    throw new TypeError(withAlg(alg, key, ...types, "Uint8Array"));
  }
  if (key.type !== "secret") {
    throw new TypeError(`${types.join(" or ")} instances for symmetric algorithms must be of type "secret"`);
  }
};
var asymmetricTypeCheck = (alg, key, usage) => {
  if (!is_key_like_default(key)) {
    throw new TypeError(withAlg(alg, key, ...types));
  }
  if (key.type === "secret") {
    throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
  }
  if (usage === "sign" && key.type === "public") {
    throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
  }
  if (usage === "decrypt" && key.type === "public") {
    throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
  }
  if (key.algorithm && usage === "verify" && key.type === "private") {
    throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
  }
  if (key.algorithm && usage === "encrypt" && key.type === "private") {
    throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`);
  }
};
var checkKeyType = (alg, key, usage) => {
  const symmetric = alg.startsWith("HS") || alg === "dir" || alg.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(alg);
  if (symmetric) {
    symmetricTypeCheck(alg, key);
  } else {
    asymmetricTypeCheck(alg, key, usage);
  }
};
var check_key_type_default = checkKeyType;

// node_modules/jose/dist/browser/lib/aesgcmkw.js
async function unwrap2(alg, key, encryptedKey, iv, tag) {
  const jweAlgorithm = alg.slice(0, 7);
  return decrypt_default(jweAlgorithm, key, encryptedKey, iv, tag, new Uint8Array(0));
}

// node_modules/jose/dist/browser/lib/decrypt_key_management.js
async function decryptKeyManagement(alg, key, encryptedKey, joseHeader, options) {
  check_key_type_default(alg, key, "decrypt");
  switch (alg) {
    case "dir": {
      if (encryptedKey !== void 0)
        throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
      return key;
    }
    case "ECDH-ES":
      if (encryptedKey !== void 0)
        throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      if (!isObject(joseHeader.epk))
        throw new JWEInvalid(`JOSE Header "epk" (Ephemeral Public Key) missing or invalid`);
      if (!ecdhAllowed(key))
        throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      const epk = await importJWK(joseHeader.epk, alg);
      let partyUInfo;
      let partyVInfo;
      if (joseHeader.apu !== void 0) {
        if (typeof joseHeader.apu !== "string")
          throw new JWEInvalid(`JOSE Header "apu" (Agreement PartyUInfo) invalid`);
        try {
          partyUInfo = decode2(joseHeader.apu);
        } catch {
          throw new JWEInvalid("Failed to base64url decode the apu");
        }
      }
      if (joseHeader.apv !== void 0) {
        if (typeof joseHeader.apv !== "string")
          throw new JWEInvalid(`JOSE Header "apv" (Agreement PartyVInfo) invalid`);
        try {
          partyVInfo = decode2(joseHeader.apv);
        } catch {
          throw new JWEInvalid("Failed to base64url decode the apv");
        }
      }
      const sharedSecret = await deriveKey(epk, key, alg === "ECDH-ES" ? joseHeader.enc : alg, alg === "ECDH-ES" ? bitLength2(joseHeader.enc) : parseInt(alg.slice(-5, -2), 10), partyUInfo, partyVInfo);
      if (alg === "ECDH-ES")
        return sharedSecret;
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return unwrap(alg.slice(-6), sharedSecret, encryptedKey);
    }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return decrypt3(alg, key, encryptedKey);
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      if (typeof joseHeader.p2c !== "number")
        throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) missing or invalid`);
      const p2cLimit = options?.maxPBES2Count || 1e4;
      if (joseHeader.p2c > p2cLimit)
        throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds`);
      if (typeof joseHeader.p2s !== "string")
        throw new JWEInvalid(`JOSE Header "p2s" (PBES2 Salt) missing or invalid`);
      let p2s2;
      try {
        p2s2 = decode2(joseHeader.p2s);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the p2s");
      }
      return decrypt2(alg, key, encryptedKey, joseHeader.p2c, p2s2);
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return unwrap(alg, key, encryptedKey);
    }
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      if (typeof joseHeader.iv !== "string")
        throw new JWEInvalid(`JOSE Header "iv" (Initialization Vector) missing or invalid`);
      if (typeof joseHeader.tag !== "string")
        throw new JWEInvalid(`JOSE Header "tag" (Authentication Tag) missing or invalid`);
      let iv;
      try {
        iv = decode2(joseHeader.iv);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the iv");
      }
      let tag;
      try {
        tag = decode2(joseHeader.tag);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the tag");
      }
      return unwrap2(alg, key, encryptedKey, iv, tag);
    }
    default: {
      throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
    }
  }
}
var decrypt_key_management_default = decryptKeyManagement;

// node_modules/jose/dist/browser/lib/validate_crit.js
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
  if (joseHeader.crit !== void 0 && protectedHeader.crit === void 0) {
    throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
  }
  if (!protectedHeader || protectedHeader.crit === void 0) {
    return /* @__PURE__ */ new Set();
  }
  if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
    throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  }
  let recognized;
  if (recognizedOption !== void 0) {
    recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
  } else {
    recognized = recognizedDefault;
  }
  for (const parameter of protectedHeader.crit) {
    if (!recognized.has(parameter)) {
      throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
    }
    if (joseHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    } else if (recognized.get(parameter) && protectedHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
    }
  }
  return new Set(protectedHeader.crit);
}
var validate_crit_default = validateCrit;

// node_modules/jose/dist/browser/lib/validate_algorithms.js
var validateAlgorithms = (option, algorithms) => {
  if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) {
    throw new TypeError(`"${option}" option must be an array of strings`);
  }
  if (!algorithms) {
    return void 0;
  }
  return new Set(algorithms);
};
var validate_algorithms_default = validateAlgorithms;

// node_modules/jose/dist/browser/jwe/flattened/decrypt.js
async function flattenedDecrypt(jwe, key, options) {
  if (!isObject(jwe)) {
    throw new JWEInvalid("Flattened JWE must be an object");
  }
  if (jwe.protected === void 0 && jwe.header === void 0 && jwe.unprotected === void 0) {
    throw new JWEInvalid("JOSE Header missing");
  }
  if (typeof jwe.iv !== "string") {
    throw new JWEInvalid("JWE Initialization Vector missing or incorrect type");
  }
  if (typeof jwe.ciphertext !== "string") {
    throw new JWEInvalid("JWE Ciphertext missing or incorrect type");
  }
  if (typeof jwe.tag !== "string") {
    throw new JWEInvalid("JWE Authentication Tag missing or incorrect type");
  }
  if (jwe.protected !== void 0 && typeof jwe.protected !== "string") {
    throw new JWEInvalid("JWE Protected Header incorrect type");
  }
  if (jwe.encrypted_key !== void 0 && typeof jwe.encrypted_key !== "string") {
    throw new JWEInvalid("JWE Encrypted Key incorrect type");
  }
  if (jwe.aad !== void 0 && typeof jwe.aad !== "string") {
    throw new JWEInvalid("JWE AAD incorrect type");
  }
  if (jwe.header !== void 0 && !isObject(jwe.header)) {
    throw new JWEInvalid("JWE Shared Unprotected Header incorrect type");
  }
  if (jwe.unprotected !== void 0 && !isObject(jwe.unprotected)) {
    throw new JWEInvalid("JWE Per-Recipient Unprotected Header incorrect type");
  }
  let parsedProt;
  if (jwe.protected) {
    try {
      const protectedHeader2 = decode2(jwe.protected);
      parsedProt = JSON.parse(decoder2.decode(protectedHeader2));
    } catch {
      throw new JWEInvalid("JWE Protected Header is invalid");
    }
  }
  if (!is_disjoint_default(parsedProt, jwe.header, jwe.unprotected)) {
    throw new JWEInvalid("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jwe.header,
    ...jwe.unprotected
  };
  validate_crit_default(JWEInvalid, /* @__PURE__ */ new Map(), options?.crit, parsedProt, joseHeader);
  if (joseHeader.zip !== void 0) {
    throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
  }
  const { alg, enc } = joseHeader;
  if (typeof alg !== "string" || !alg) {
    throw new JWEInvalid("missing JWE Algorithm (alg) in JWE Header");
  }
  if (typeof enc !== "string" || !enc) {
    throw new JWEInvalid("missing JWE Encryption Algorithm (enc) in JWE Header");
  }
  const keyManagementAlgorithms = options && validate_algorithms_default("keyManagementAlgorithms", options.keyManagementAlgorithms);
  const contentEncryptionAlgorithms = options && validate_algorithms_default("contentEncryptionAlgorithms", options.contentEncryptionAlgorithms);
  if (keyManagementAlgorithms && !keyManagementAlgorithms.has(alg) || !keyManagementAlgorithms && alg.startsWith("PBES2")) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
  }
  if (contentEncryptionAlgorithms && !contentEncryptionAlgorithms.has(enc)) {
    throw new JOSEAlgNotAllowed('"enc" (Encryption Algorithm) Header Parameter value not allowed');
  }
  let encryptedKey;
  if (jwe.encrypted_key !== void 0) {
    try {
      encryptedKey = decode2(jwe.encrypted_key);
    } catch {
      throw new JWEInvalid("Failed to base64url decode the encrypted_key");
    }
  }
  let resolvedKey = false;
  if (typeof key === "function") {
    key = await key(parsedProt, jwe);
    resolvedKey = true;
  }
  let cek;
  try {
    cek = await decrypt_key_management_default(alg, key, encryptedKey, joseHeader, options);
  } catch (err) {
    if (err instanceof TypeError || err instanceof JWEInvalid || err instanceof JOSENotSupported) {
      throw err;
    }
    cek = cek_default(enc);
  }
  let iv;
  let tag;
  try {
    iv = decode2(jwe.iv);
  } catch {
    throw new JWEInvalid("Failed to base64url decode the iv");
  }
  try {
    tag = decode2(jwe.tag);
  } catch {
    throw new JWEInvalid("Failed to base64url decode the tag");
  }
  const protectedHeader = encoder.encode(jwe.protected ?? "");
  let additionalData;
  if (jwe.aad !== void 0) {
    additionalData = concat(protectedHeader, encoder.encode("."), encoder.encode(jwe.aad));
  } else {
    additionalData = protectedHeader;
  }
  let ciphertext;
  try {
    ciphertext = decode2(jwe.ciphertext);
  } catch {
    throw new JWEInvalid("Failed to base64url decode the ciphertext");
  }
  let plaintext = await decrypt_default(enc, cek, ciphertext, iv, tag, additionalData);
  const result = { plaintext };
  if (jwe.protected !== void 0) {
    result.protectedHeader = parsedProt;
  }
  if (jwe.aad !== void 0) {
    try {
      result.additionalAuthenticatedData = decode2(jwe.aad);
    } catch {
      throw new JWEInvalid("Failed to base64url decode the aad");
    }
  }
  if (jwe.unprotected !== void 0) {
    result.sharedUnprotectedHeader = jwe.unprotected;
  }
  if (jwe.header !== void 0) {
    result.unprotectedHeader = jwe.header;
  }
  if (resolvedKey) {
    return { ...result, key };
  }
  return result;
}

// node_modules/jose/dist/browser/jwe/compact/decrypt.js
async function compactDecrypt(jwe, key, options) {
  if (jwe instanceof Uint8Array) {
    jwe = decoder2.decode(jwe);
  }
  if (typeof jwe !== "string") {
    throw new JWEInvalid("Compact JWE must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: encryptedKey, 2: iv, 3: ciphertext, 4: tag, length } = jwe.split(".");
  if (length !== 5) {
    throw new JWEInvalid("Invalid Compact JWE");
  }
  const decrypted = await flattenedDecrypt({
    ciphertext,
    iv: iv || void 0,
    protected: protectedHeader || void 0,
    tag: tag || void 0,
    encrypted_key: encryptedKey || void 0
  }, key, options);
  const result = { plaintext: decrypted.plaintext, protectedHeader: decrypted.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: decrypted.key };
  }
  return result;
}

// node_modules/jose/dist/browser/jwe/flattened/encrypt.js
var unprotected = Symbol();

// node_modules/jose/dist/browser/runtime/subtle_dsa.js
function subtleDsa(alg, algorithm) {
  const hash = `SHA-${alg.slice(-3)}`;
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512":
      return { hash, name: "HMAC" };
    case "PS256":
    case "PS384":
    case "PS512":
      return { hash, name: "RSA-PSS", saltLength: alg.slice(-3) >> 3 };
    case "RS256":
    case "RS384":
    case "RS512":
      return { hash, name: "RSASSA-PKCS1-v1_5" };
    case "ES256":
    case "ES384":
    case "ES512":
      return { hash, name: "ECDSA", namedCurve: algorithm.namedCurve };
    case "EdDSA":
      return { name: algorithm.name };
    default:
      throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  }
}

// node_modules/jose/dist/browser/runtime/get_sign_verify_key.js
function getCryptoKey3(alg, key, usage) {
  if (isCryptoKey(key)) {
    checkSigCryptoKey(key, alg, usage);
    return key;
  }
  if (key instanceof Uint8Array) {
    if (!alg.startsWith("HS")) {
      throw new TypeError(invalid_key_input_default(key, ...types));
    }
    return webcrypto_default.subtle.importKey("raw", key, { hash: `SHA-${alg.slice(-3)}`, name: "HMAC" }, false, [usage]);
  }
  throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
}

// node_modules/jose/dist/browser/runtime/verify.js
var verify = async (alg, key, signature, data) => {
  const cryptoKey = await getCryptoKey3(alg, key, "verify");
  check_key_length_default(alg, cryptoKey);
  const algorithm = subtleDsa(alg, cryptoKey.algorithm);
  try {
    return await webcrypto_default.subtle.verify(algorithm, cryptoKey, signature, data);
  } catch {
    return false;
  }
};
var verify_default = verify;

// node_modules/jose/dist/browser/jws/flattened/verify.js
async function flattenedVerify(jws, key, options) {
  if (!isObject(jws)) {
    throw new JWSInvalid("Flattened JWS must be an object");
  }
  if (jws.protected === void 0 && jws.header === void 0) {
    throw new JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
  }
  if (jws.protected !== void 0 && typeof jws.protected !== "string") {
    throw new JWSInvalid("JWS Protected Header incorrect type");
  }
  if (jws.payload === void 0) {
    throw new JWSInvalid("JWS Payload missing");
  }
  if (typeof jws.signature !== "string") {
    throw new JWSInvalid("JWS Signature missing or incorrect type");
  }
  if (jws.header !== void 0 && !isObject(jws.header)) {
    throw new JWSInvalid("JWS Unprotected Header incorrect type");
  }
  let parsedProt = {};
  if (jws.protected) {
    try {
      const protectedHeader = decode2(jws.protected);
      parsedProt = JSON.parse(decoder2.decode(protectedHeader));
    } catch {
      throw new JWSInvalid("JWS Protected Header is invalid");
    }
  }
  if (!is_disjoint_default(parsedProt, jws.header)) {
    throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jws.header
  };
  const extensions = validate_crit_default(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options?.crit, parsedProt, joseHeader);
  let b64 = true;
  if (extensions.has("b64")) {
    b64 = parsedProt.b64;
    if (typeof b64 !== "boolean") {
      throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    }
  }
  const { alg } = joseHeader;
  if (typeof alg !== "string" || !alg) {
    throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  }
  const algorithms = options && validate_algorithms_default("algorithms", options.algorithms);
  if (algorithms && !algorithms.has(alg)) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
  }
  if (b64) {
    if (typeof jws.payload !== "string") {
      throw new JWSInvalid("JWS Payload must be a string");
    }
  } else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) {
    throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
  }
  let resolvedKey = false;
  if (typeof key === "function") {
    key = await key(parsedProt, jws);
    resolvedKey = true;
  }
  check_key_type_default(alg, key, "verify");
  const data = concat(encoder.encode(jws.protected ?? ""), encoder.encode("."), typeof jws.payload === "string" ? encoder.encode(jws.payload) : jws.payload);
  let signature;
  try {
    signature = decode2(jws.signature);
  } catch {
    throw new JWSInvalid("Failed to base64url decode the signature");
  }
  const verified = await verify_default(alg, key, signature, data);
  if (!verified) {
    throw new JWSSignatureVerificationFailed();
  }
  let payload;
  if (b64) {
    try {
      payload = decode2(jws.payload);
    } catch {
      throw new JWSInvalid("Failed to base64url decode the payload");
    }
  } else if (typeof jws.payload === "string") {
    payload = encoder.encode(jws.payload);
  } else {
    payload = jws.payload;
  }
  const result = { payload };
  if (jws.protected !== void 0) {
    result.protectedHeader = parsedProt;
  }
  if (jws.header !== void 0) {
    result.unprotectedHeader = jws.header;
  }
  if (resolvedKey) {
    return { ...result, key };
  }
  return result;
}

// node_modules/jose/dist/browser/jws/compact/verify.js
async function compactVerify(jws, key, options) {
  if (jws instanceof Uint8Array) {
    jws = decoder2.decode(jws);
  }
  if (typeof jws !== "string") {
    throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
  if (length !== 3) {
    throw new JWSInvalid("Invalid Compact JWS");
  }
  const verified = await flattenedVerify({ payload, protected: protectedHeader, signature }, key, options);
  const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}

// node_modules/jose/dist/browser/lib/epoch.js
var epoch_default = (date) => Math.floor(date.getTime() / 1e3);

// node_modules/jose/dist/browser/lib/secs.js
var minute = 60;
var hour = minute * 60;
var day = hour * 24;
var week = day * 7;
var year = day * 365.25;
var REGEX = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
var secs_default = (str) => {
  const matched = REGEX.exec(str);
  if (!matched) {
    throw new TypeError("Invalid time period format");
  }
  const value = parseFloat(matched[1]);
  const unit = matched[2].toLowerCase();
  switch (unit) {
    case "sec":
    case "secs":
    case "second":
    case "seconds":
    case "s":
      return Math.round(value);
    case "minute":
    case "minutes":
    case "min":
    case "mins":
    case "m":
      return Math.round(value * minute);
    case "hour":
    case "hours":
    case "hr":
    case "hrs":
    case "h":
      return Math.round(value * hour);
    case "day":
    case "days":
    case "d":
      return Math.round(value * day);
    case "week":
    case "weeks":
    case "w":
      return Math.round(value * week);
    default:
      return Math.round(value * year);
  }
};

// node_modules/jose/dist/browser/lib/jwt_claims_set.js
var normalizeTyp = (value) => value.toLowerCase().replace(/^application\//, "");
var checkAudiencePresence = (audPayload, audOption) => {
  if (typeof audPayload === "string") {
    return audOption.includes(audPayload);
  }
  if (Array.isArray(audPayload)) {
    return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
  }
  return false;
};
var jwt_claims_set_default = (protectedHeader, encodedPayload, options = {}) => {
  const { typ } = options;
  if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
    throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', "typ", "check_failed");
  }
  let payload;
  try {
    payload = JSON.parse(decoder2.decode(encodedPayload));
  } catch {
  }
  if (!isObject(payload)) {
    throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
  }
  const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
  const presenceCheck = [...requiredClaims];
  if (maxTokenAge !== void 0)
    presenceCheck.push("iat");
  if (audience !== void 0)
    presenceCheck.push("aud");
  if (subject !== void 0)
    presenceCheck.push("sub");
  if (issuer !== void 0)
    presenceCheck.push("iss");
  for (const claim of new Set(presenceCheck.reverse())) {
    if (!(claim in payload)) {
      throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, claim, "missing");
    }
  }
  if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
    throw new JWTClaimValidationFailed('unexpected "iss" claim value', "iss", "check_failed");
  }
  if (subject && payload.sub !== subject) {
    throw new JWTClaimValidationFailed('unexpected "sub" claim value', "sub", "check_failed");
  }
  if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
    throw new JWTClaimValidationFailed('unexpected "aud" claim value', "aud", "check_failed");
  }
  let tolerance;
  switch (typeof options.clockTolerance) {
    case "string":
      tolerance = secs_default(options.clockTolerance);
      break;
    case "number":
      tolerance = options.clockTolerance;
      break;
    case "undefined":
      tolerance = 0;
      break;
    default:
      throw new TypeError("Invalid clockTolerance option type");
  }
  const { currentDate } = options;
  const now = epoch_default(currentDate || /* @__PURE__ */ new Date());
  if ((payload.iat !== void 0 || maxTokenAge) && typeof payload.iat !== "number") {
    throw new JWTClaimValidationFailed('"iat" claim must be a number', "iat", "invalid");
  }
  if (payload.nbf !== void 0) {
    if (typeof payload.nbf !== "number") {
      throw new JWTClaimValidationFailed('"nbf" claim must be a number', "nbf", "invalid");
    }
    if (payload.nbf > now + tolerance) {
      throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', "nbf", "check_failed");
    }
  }
  if (payload.exp !== void 0) {
    if (typeof payload.exp !== "number") {
      throw new JWTClaimValidationFailed('"exp" claim must be a number', "exp", "invalid");
    }
    if (payload.exp <= now - tolerance) {
      throw new JWTExpired('"exp" claim timestamp check failed', "exp", "check_failed");
    }
  }
  if (maxTokenAge) {
    const age = now - payload.iat;
    const max = typeof maxTokenAge === "number" ? maxTokenAge : secs_default(maxTokenAge);
    if (age - tolerance > max) {
      throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', "iat", "check_failed");
    }
    if (age < 0 - tolerance) {
      throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed");
    }
  }
  return payload;
};

// node_modules/jose/dist/browser/jwt/verify.js
async function jwtVerify(jwt, key, options) {
  const verified = await compactVerify(jwt, key, options);
  if (verified.protectedHeader.crit?.includes("b64") && verified.protectedHeader.b64 === false) {
    throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
  }
  const payload = jwt_claims_set_default(verified.protectedHeader, verified.payload, options);
  const result = { payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}

// node_modules/jose/dist/browser/jwt/decrypt.js
async function jwtDecrypt(jwt, key, options) {
  const decrypted = await compactDecrypt(jwt, key, options);
  const payload = jwt_claims_set_default(decrypted.protectedHeader, decrypted.plaintext, options);
  const { protectedHeader } = decrypted;
  if (protectedHeader.iss !== void 0 && protectedHeader.iss !== payload.iss) {
    throw new JWTClaimValidationFailed('replicated "iss" claim header parameter mismatch', "iss", "mismatch");
  }
  if (protectedHeader.sub !== void 0 && protectedHeader.sub !== payload.sub) {
    throw new JWTClaimValidationFailed('replicated "sub" claim header parameter mismatch', "sub", "mismatch");
  }
  if (protectedHeader.aud !== void 0 && JSON.stringify(protectedHeader.aud) !== JSON.stringify(payload.aud)) {
    throw new JWTClaimValidationFailed('replicated "aud" claim header parameter mismatch', "aud", "mismatch");
  }
  const result = { payload, protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: decrypted.key };
  }
  return result;
}

// node_modules/jose/dist/browser/jwks/local.js
function getKtyFromAlg(alg) {
  switch (typeof alg === "string" && alg.slice(0, 2)) {
    case "RS":
    case "PS":
      return "RSA";
    case "ES":
      return "EC";
    case "Ed":
      return "OKP";
    default:
      throw new JOSENotSupported('Unsupported "alg" value for a JSON Web Key Set');
  }
}
function isJWKSLike(jwks) {
  return jwks && typeof jwks === "object" && Array.isArray(jwks.keys) && jwks.keys.every(isJWKLike);
}
function isJWKLike(key) {
  return isObject(key);
}
function clone(obj) {
  if (typeof structuredClone === "function") {
    return structuredClone(obj);
  }
  return JSON.parse(JSON.stringify(obj));
}
var LocalJWKSet = class {
  constructor(jwks) {
    this._cached = /* @__PURE__ */ new WeakMap();
    if (!isJWKSLike(jwks)) {
      throw new JWKSInvalid("JSON Web Key Set malformed");
    }
    this._jwks = clone(jwks);
  }
  async getKey(protectedHeader, token) {
    const { alg, kid } = { ...protectedHeader, ...token?.header };
    const kty = getKtyFromAlg(alg);
    const candidates = this._jwks.keys.filter((jwk2) => {
      let candidate = kty === jwk2.kty;
      if (candidate && typeof kid === "string") {
        candidate = kid === jwk2.kid;
      }
      if (candidate && typeof jwk2.alg === "string") {
        candidate = alg === jwk2.alg;
      }
      if (candidate && typeof jwk2.use === "string") {
        candidate = jwk2.use === "sig";
      }
      if (candidate && Array.isArray(jwk2.key_ops)) {
        candidate = jwk2.key_ops.includes("verify");
      }
      if (candidate && alg === "EdDSA") {
        candidate = jwk2.crv === "Ed25519" || jwk2.crv === "Ed448";
      }
      if (candidate) {
        switch (alg) {
          case "ES256":
            candidate = jwk2.crv === "P-256";
            break;
          case "ES256K":
            candidate = jwk2.crv === "secp256k1";
            break;
          case "ES384":
            candidate = jwk2.crv === "P-384";
            break;
          case "ES512":
            candidate = jwk2.crv === "P-521";
            break;
        }
      }
      return candidate;
    });
    const { 0: jwk, length } = candidates;
    if (length === 0) {
      throw new JWKSNoMatchingKey();
    } else if (length !== 1) {
      const error = new JWKSMultipleMatchingKeys();
      const { _cached } = this;
      error[Symbol.asyncIterator] = async function* () {
        for (const jwk2 of candidates) {
          try {
            yield await importWithAlgCache(_cached, jwk2, alg);
          } catch {
            continue;
          }
        }
      };
      throw error;
    }
    return importWithAlgCache(this._cached, jwk, alg);
  }
};
async function importWithAlgCache(cache, jwk, alg) {
  const cached = cache.get(jwk) || cache.set(jwk, {}).get(jwk);
  if (cached[alg] === void 0) {
    const key = await importJWK({ ...jwk, ext: true }, alg);
    if (key instanceof Uint8Array || key.type !== "public") {
      throw new JWKSInvalid("JSON Web Key Set members must be public keys");
    }
    cached[alg] = key;
  }
  return cached[alg];
}

// node_modules/jose/dist/browser/runtime/fetch_jwks.js
var fetchJwks = async (url, timeout, options) => {
  let controller;
  let id;
  let timedOut = false;
  if (typeof AbortController === "function") {
    controller = new AbortController();
    id = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, timeout);
  }
  const response = await fetch(url.href, {
    signal: controller ? controller.signal : void 0,
    redirect: "manual",
    headers: options.headers
  }).catch((err) => {
    if (timedOut)
      throw new JWKSTimeout();
    throw err;
  });
  if (id !== void 0)
    clearTimeout(id);
  if (response.status !== 200) {
    throw new JOSEError("Expected 200 OK from the JSON Web Key Set HTTP response");
  }
  try {
    return await response.json();
  } catch {
    throw new JOSEError("Failed to parse the JSON Web Key Set HTTP response as JSON");
  }
};
var fetch_jwks_default = fetchJwks;

// node_modules/jose/dist/browser/jwks/remote.js
function isCloudflareWorkers() {
  return typeof WebSocketPair !== "undefined" || typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers" || typeof EdgeRuntime !== "undefined" && EdgeRuntime === "vercel";
}
var USER_AGENT;
if (typeof navigator === "undefined" || !navigator.userAgent?.startsWith?.("Mozilla/5.0 ")) {
  const NAME = "jose";
  const VERSION = "v5.1.3";
  USER_AGENT = `${NAME}/${VERSION}`;
}
var RemoteJWKSet = class extends LocalJWKSet {
  constructor(url, options) {
    super({ keys: [] });
    this._jwks = void 0;
    if (!(url instanceof URL)) {
      throw new TypeError("url must be an instance of URL");
    }
    this._url = new URL(url.href);
    this._options = { agent: options?.agent, headers: options?.headers };
    this._timeoutDuration = typeof options?.timeoutDuration === "number" ? options?.timeoutDuration : 5e3;
    this._cooldownDuration = typeof options?.cooldownDuration === "number" ? options?.cooldownDuration : 3e4;
    this._cacheMaxAge = typeof options?.cacheMaxAge === "number" ? options?.cacheMaxAge : 6e5;
  }
  coolingDown() {
    return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cooldownDuration : false;
  }
  fresh() {
    return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cacheMaxAge : false;
  }
  async getKey(protectedHeader, token) {
    if (!this._jwks || !this.fresh()) {
      await this.reload();
    }
    try {
      return await super.getKey(protectedHeader, token);
    } catch (err) {
      if (err instanceof JWKSNoMatchingKey) {
        if (this.coolingDown() === false) {
          await this.reload();
          return super.getKey(protectedHeader, token);
        }
      }
      throw err;
    }
  }
  async reload() {
    if (this._pendingFetch && isCloudflareWorkers()) {
      this._pendingFetch = void 0;
    }
    const headers = new Headers(this._options.headers);
    if (USER_AGENT && !headers.has("User-Agent")) {
      headers.set("User-Agent", USER_AGENT);
      this._options.headers = Object.fromEntries(headers.entries());
    }
    this._pendingFetch || (this._pendingFetch = fetch_jwks_default(this._url, this._timeoutDuration, this._options).then((json) => {
      if (!isJWKSLike(json)) {
        throw new JWKSInvalid("JSON Web Key Set malformed");
      }
      this._jwks = { keys: json.keys };
      this._jwksTimestamp = Date.now();
      this._pendingFetch = void 0;
    }).catch((err) => {
      this._pendingFetch = void 0;
      throw err;
    }));
    await this._pendingFetch;
  }
};
function createRemoteJWKSet(url, options) {
  const set = new RemoteJWKSet(url, options);
  return async function(protectedHeader, token) {
    return set.getKey(protectedHeader, token);
  };
}

// src/handlers/loginGoogleUser.ts
var loginGoogleUser = async (store) => {
  console.log(`loginGoogleUser`);
  let formData = await store.req.raw.formData();
  let CSRFTokenInCookie = store.req.cookies.g_csrf_token;
  let CSRFTokenInPost = formData.get("g_csrf_token");
  let IDToken = formData.get("credential");
  if (!CSRFTokenInCookie) {
    throw new Error("503", { cause: "No CSRF token present in the google cookie" });
  }
  if (!CSRFTokenInPost) {
    throw new Error("503", { cause: "No CSRF token present in the post body" });
  }
  if (CSRFTokenInCookie != CSRFTokenInPost) {
    throw new Error("503", { cause: "CSRF token mismatch" });
  }
  console.log(`CSRF OK as "${store.req.cookies.g_csrf_token}" == "${formData.get("g_csrf_token")}"`);
  const JWKS = createRemoteJWKSet(new URL("https://www.googleapis.com/oauth2/v3/certs"));
  const { payload, protectedHeader } = await jwtVerify(IDToken, JWKS, {
    issuer: "https://accounts.google.com",
    audience: store.env.GOOGLE_KEY_FULL
  });
  if (!payload.nonce) {
    throw new Error("503", { cause: "No nonce present in the ID token" });
  }
  let resUserBlocked = await checkIfUserBlocked(store, "rishav.sharan@gmail.com");
  console.log("User Blocked: ", JSON.stringify(resUserBlocked));
  if (resUserBlocked.size != 0) {
    throw new Error("503", { cause: "User is blocked" });
  }
  let user = {};
  let isNewUser = false;
  let resUserExists = await getGoogleUserFromDB(store, payload.email);
  if (resUserExists.size != 0) {
    user = resUserExists.rows[0];
  } else {
    isNewUser = true;
    user.id = nanoid(16);
    user.slug = nanoid();
    user.name = payload.name;
    user.thumb = `https://robohash.org/${user.slug}?set=set3`;
    user.honorific = "Mx";
    user.flair = "Nony is not a Mouse";
    user.role = "user";
    user.level = "wood";
    user.stars = 0;
    user.creds = 0;
    user.gil = 0;
    user.google_id = payload.email;
    let resAddUser = await addGoogleUserToDB(store, user);
    if (resAddUser.rowsAffected != 1) {
      throw new Error("503", { cause: "Unable to add user to DB" });
    }
  }
  let sessionId = nanoid(24);
  let _ = await addNewSession(store, sessionId, user.id, store.req.raw.headers.get("User-Agent") || "");
  store.res.headers.append("Set-Cookie", `D_UID=${sessionId}; path=/; HttpOnly; Secure; SameSite=Strict;`);
  store.res.headers.append("Set-Cookie", `D_USLUG=${user.slug}; path=/; SameSite=Strict;`);
  store.res.headers.append("Set-Cookie", `D_UNAME=${user.name}; path=/; SameSite=Strict;`);
  store.res.headers.append("Set-Cookie", `D_UHONORIFIC=${user.honorific}; path=/; SameSite=Strict;`);
  store.res.headers.append("Set-Cookie", `D_UTHUMB=${user.thumb}; path=/; SameSite=Strict;`);
  store.res.headers.append("Set-Cookie", `D_UFLAIR=${user.flair}; path=/; SameSite=Strict;`);
  store.res.headers.append("Set-Cookie", `D_UROLE=${user.role}; path=/; SameSite=Strict;`);
  store.res.headers.append("Set-Cookie", `D_ULEVEL=${user.level}; path=/; SameSite=Strict;`);
  store.res.headers.append("Set-Cookie", `D_USTARS=${user.stars}; path=/; SameSite=Strict;`);
  store.res.headers.append("Set-Cookie", `D_UCREDS=${user.creds}; path=/; SameSite=Strict;`);
  store.res.headers.append("Set-Cookie", `D_UGIL=${user.gil}; path=/; SameSite=Strict;`);
  store.res.headers.append("Set-Cookie", `D_NEW_SESSION=true; path=/; SameSite=Strict;`);
  if (isNewUser) {
    store.res.headers.append("Set-Cookie", `D_MODAL_FRE=true; path=/; SameSite=Strict;`);
  } else {
    store.res.headers.append("Set-Cookie", `D_TOAST_SUCCESS=You have been logged in; path=/; SameSite=Strict;`);
  }
  let redirectTo = store.req.url.origin + store.req.url.searchParams.get("redirectTo") || store.req.url.origin + "/";
  console.log(`redirectTo: ${redirectTo}`);
  store.res.status = 302;
  store.res.headers.append("Location", redirectTo);
};

// src/handlers/buildNewPostPage.ts
var buildNewPostPage = async (store) => {
  store.page.title = "META: New Post Page";
  store.page.descr = "META: This is the about page";
  store.page.html = /*html*/
  `

        <article class="min-h-screen">
            
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
                                <select id="post_category_select" class="select select-bordered w-full text-lg" name="category" >
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
                            <select id="post_type_select" class="select select-bordered w-full text-lg" name="type" 
                                onchange="toggleFormControls()">
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
                            </label>
                            <input id="post_title_input" type="text" placeholder="Type here" name="title"
                                class="input input-bordered w-full" onInput="countNewPostTitleChars()" minlength="2" maxlength="5" />
                            <label class="label">
                            <span id="post_title_char_count" class="label-text-alt">0/5 chars</span>
                            </label>
                        </div>

                        <div id="post_descr_controls" class="form-control hidden">
                            <label class="label">
                                <span class="label-text">Post Description</span>
                            </label>
                            <textarea id="post_descr_textarea" minlength="2" maxlength="5" name="description"
                                class="textarea textarea-bordered h-24 invalid:border-red-500" placeholder="Bio" onInput="countNewPostDescrChars()"></textarea>
                            <label class="label">
                                <span id="descr_char_count" class="label-text-alt">0/5 chars</span>
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
                let counter = 5 - numOfEnteredChars;
                post_title_char_count.innerText = counter + "/5 chars";
            };
            function countNewPostDescrChars() {
                let numOfEnteredChars = post_descr_textarea.value.length;
                let counter = 5 - numOfEnteredChars;
                descr_char_count.innerText = counter + "/5 chars";
            };

            function validateNewPostForm() {
                return true
            }



        <\/script>
        `;
};

// src/handlers/submitNewPostForm.ts
var submitNewPostForm = async (store) => {
  let formData = await store.req.raw.formData();
  formData.forEach((value, key) => {
    console.log(`${key} ==> ${value}`);
  });
  if (!store.req.cookies.D_UID) {
    throw new Error("401", { cause: "No user cookie present" });
  }
  console.log("Original text: ", store.req.cookies.D_UID);
  const secret = new TextEncoder().encode(store.env.SECRET);
  const options = {
    issuer: "https://digglu.com",
    contentEncryptionAlgorithms: ["A256GCM"],
    keyManagementAlgorithms: ["dir"]
  };
  let uid = await jwtDecrypt(store.req.cookies.D_UID, secret, options);
  console.log("Decrypted JWE: ", JSON.stringify(uid));
  store.res.content = JSON.stringify({ message: "Hello from the API" });
};

// src/server.ts
var routes = {
  // API Routes
  "GET/api/hello": [() => console.log("YOYO"), sayHello],
  "POST/api/submitNewPostForm": [() => console.log("POSTING NEW POST"), submitNewPostForm],
  "POST/api/login/google": [() => console.log("POSTING GOOLE AUTH"), loginGoogleUser],
  // Static Routes
  "GET/": [buildHomePage, generateHTML],
  "GET/about": [buildAboutPage, generateHTML],
  // Auth routes
  "GET/logout": [logout],
  // Posts
  "GET/p/new": [buildNewPostPage, generateHTML],
  "GET/p/:slug": [buildPostDetailsPage, generateHTML]
};
var server_default = {
  async fetch(request, env, ctx) {
    let url = new URL(request.url);
    console.log("User Agent: ", request.headers.get("User-Agent"));
    if (url.pathname.startsWith("/pub")) {
      return env.ASSETS.fetch(request);
    }
    let store = {
      req: {
        raw: request,
        url,
        slug: null,
        method: request.method,
        redirect: null,
        cookies: parseCookies(request.headers.get("Cookie"))
      },
      page: {
        title: null,
        descr: null,
        html: null
      },
      env,
      res: {
        status: 200,
        headers: new Headers(),
        content: ""
      }
    };
    let handlers;
    let route;
    console.log("Cookies: ", store.req.cookies);
    if (!store.req.cookies.D_SID) {
      store.res.headers.append("Set-Cookie", `D_SID=${nanoid()}; Path=/; HttpOnly; Secure; SameSite=Strict`);
    }
    if (store.req.url.pathname.startsWith("/api")) {
      store.res.headers.append("content-type", "application/json;charset=UTF-8");
      store.res.headers.append("Powered-by", "API: Pika Pika Pika Choooo");
    } else {
      store.res.headers.append("Powered-by", "VIEW: Pika Pika Pika Choooo");
      store.res.headers.append("Content-Type", "text/html; charset=UTF-8");
    }
    try {
      route = request.method + store.req.url.pathname;
      if (route in routes) {
        handlers = routes[route];
      } else {
        let urlFrag = store.req.url.pathname.split("/");
        console.log("URL Fragments: ", urlFrag);
        store.req.slug = urlFrag[2];
        if (urlFrag[2]) {
          urlFrag[2] = ":slug";
        }
        route = request.method + urlFrag.join("/");
        if (route in routes) {
          handlers = routes[route];
        } else {
          handlers = [() => {
            throw new Error("404");
          }];
        }
      }
      for (const handler of handlers) {
        await handler(store);
      }
    } catch (e) {
      console.log(e);
      store.res.content = "ERROR: \n" + e;
      if (e.message in ["401", "404", "500"]) {
        store.res.status = e.message;
      } else {
        store.res.status = 500;
        store.res.content = "ERROR: \n" + e;
      }
    }
    if (store.req.redirect) {
      return Response.redirect(store.req.redirect, 302);
    }
    return new Response(store.res.content, { status: store.res.status, headers: store.res.headers });
  }
};
export {
  server_default as default
};
