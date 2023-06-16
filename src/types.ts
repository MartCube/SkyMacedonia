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

export interface MetaTags {
	title: string,
	description: string,
	image: string,
}

export interface Service {
	name: string,
	uid: string,
	serviceType: string,
	description: any,
	gallery: string[],
	accommodations: {
		title: string,
		subtitle: string,
		image: string,
		link: string,
	}[]
}

export interface Link {
	value: string,
	label: string,
}