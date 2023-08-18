import { Store } from "../defs"

type BodyImage = {
	src: string;
	width?: number;
	height?: number;
	area?: number;
};

type OgModel = {
	title?: string;
	desc?: string;
	image?: string;
	image_alt?: string;
	image_width?: string;
	image_height?: string;
	body_image?: string;
	icon_img?: string;
	favicon?: string;
};
async function getOpenGraphData(response: Response): Promise<OgModel> {
	let ogData = {} as OgModel;
	let bodyImagesArray: BodyImage[] = [];

	const rewriter = new HTMLRewriter()
		.on('meta[property="og:title"]', { element(el) {
				ogData.title = el.getAttribute('content') ?? undefined;
			},
		})
		.on('meta[property="og:description"]', {
			element(el) {

				ogData.desc = el.getAttribute('content') ?? undefined;
			},
		})
		.on('meta[property="og:image"]', {
			element(el) {
				ogData.image = el.getAttribute('content') ?? undefined;
			},
		})
		.on('meta[property="og:image:alt"]', {
			element(el) {
				ogData.image_alt = el.getAttribute('content') ?? undefined;
			},
		})
		.on('meta[property="og:image:width"]', {
			element(el) {
				ogData.image_width = el.getAttribute('content') ?? undefined;
			},
		})
		.on('link[rel="apple-touch-icon"]', {
            element: el => {
                ogData.icon_img = el.getAttribute('href') ?? undefined;
            },
        })
        .on('link[rel="icon"]', {
            element: el => {
                ogData.favicon = el.getAttribute('href') ?? undefined;
            },
        })
		.on('img', {
			element(el) {
				const src = el.getAttribute('src');
				const width = el.getAttribute('width');
				const height = el.getAttribute('height');
				const area = width && height ? parseInt(width) * parseInt(height) : 0;
				if (src) {
					bodyImagesArray.push(
						{ 
							src, 
							width: width ? parseInt(width): undefined, 
							height: height ? parseInt(height) : undefined, 
							area: area ?? 0 
						});
				}

			},
		})
	
	await rewriter.transform(response).text(); 
	// set the image with largest area as the body image. else use the first image
	if (bodyImagesArray.length > 0) {
		const bodyImage = bodyImagesArray.reduce((prev, current) => (prev.area ?? 0) > (current.area ?? 0) ? prev : current);
		ogData.body_image = bodyImage.src;
	}

	return ogData;
}

export const sayHello = async (store: Store) => {
    		// (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
		// TODO return error on invalid url
		// TODO return error on timeout
		// TODO return error on invalid response
		// TODO handle case when totle, descr or image is missing
		const response 	= await fetch('https://verdin.pages.dev');
		const ogData 	= await getOpenGraphData(response);

    store.res.content = JSON.stringify( ogData, null, 2)
    store. res.headers.set('Content-Type', 'application/json')
}