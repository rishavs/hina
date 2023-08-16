export type Env = {
    GOOGLE_KEY_FULL: 	string;
    GOOGLE_KEY_ID: 		string;
    DATABASE_PASSWORD: 	string;
    DATABASE_USERNAME: 	string;
    DATABASE_HOST: 		string;
	ASSETS: 			Fetcher;
	SECRET: 			string;
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
	//
	// Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
	// MY_QUEUE: Queue;
}

export type Store = {
	req: {
		raw: 		Request,
		url: 		URL,
        id: 		string | null,
		method: 	string,
		redirect: 	string | null,
		cookies: 	Record<string, string>,
	},
    env: Env,
	page : {
		title: 		string | null,
		descr: 		string | null,
		html: 		string | null,
	},
	res: {
		status: 	number,
		headers: 	Headers,
		content: 	string,
	},
}

export type Post = {
	slug: 			string,
	authorId: 		string,
	title: 			string,
	link: 			string,
	thumb: 			string,
	content: 		string,
	digs: 			number,
	buries: 		number,
	created: 		string,
}

export type User = {
	id: 			string,
	slug: 			string,
	name: 			string,
	thumb: 			string,
	honorific: 		string,
	flair: 			string,
	role: 			string,
	level: 			string,
	stars: 			number,
	creds: 			number,
	gil: 			number,
	google_id?: 	string,
	apple_id?: 		string,
}

// TODO - sanitize. delete all cookies which are not allowed
export type AllowedCookies =
	| "D_UID"
	| "D_USLUG"
	| "D_UNAME"
	| "D_UHONORIFIC"
	| "D_UTHUMB"
	| "D_UFLAIR"
	| "D_UROLE"
	| "D_ULEVEL"
	| "D_USTARS"
	| "D_UCREDS"
	| "D_UGIL"
	| "D_MODAL_FRE"
	| "D_TOAST_SUCCESS"
	| "D_TOAST_ERROR"
	| "D_TOAST_INFO"
	| "D_TOAST_WARN"