export interface App {
	contacts: {
		value: string,
		icon: string,
		link: string,
	}[],
	smedias: {
		name: string,
		icon: string,
		link: string,
	}[],
}

export interface Link {
	value: string,
	label: string,
}

export interface Page {
	content: any,
	metaTags: MetaTags,
}

export interface MetaTags {
	title: string,
	description: string,
	image: string,
}

export interface ServiceAccommodation {
	title: string,
	subtitle: string,
	image: string,
	link: string,
}

export interface ServiceCard{
	image:string,
	title: string,
	description:string,
	link:string,
}

export interface Service {
	title: string,
	image:string,
	uid: string,
	serviceType: string,
	description: any,
	gallery: string[],
	accommodations: ServiceAccommodation[],
	metaTags: MetaTags,
}

export interface Sitemap {
	url: string,
	changefreq: string,
	priority: number,
	lastmod: string,
}

