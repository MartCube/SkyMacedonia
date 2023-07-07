export const AppQuery = groq`*[ _type == 'app' ][0]{
	contacts[]{
		value,
		icon,
		link,
	},
	smedias[]{
		name,
		icon,
		link,
	}
}`

export const PageQuery = groq`*[ _type == 'page' && $uid == uid.current ][0]{
  content[]{
    _type == 'intro' => {
			...,
      video,
			'image': image.asset._ref,
    },
    _type == 'services' => {
			...,
      number,
    },
    _type == 'contact' => {
			...,
			'image': image.asset._ref,
    },
  },
	metaTags{
		title,
		description,
		'image': image.asset._ref,
	}
}`

export const ServiceCardsQuery = groq`*[ _type == 'service' && $serviceType == serviceType ]{
  "image": image.asset._ref,
  "title": name,
  "description":cardDescription,
  "link":uid.current,
}`

export const ServiceQuery = groq`*[ _type == 'service' && $uid == uid.current ][0]{
  "title": name,
	"image": image.asset._ref,
  "uid":uid.current,
  serviceType,
  description,
  "gallery": gallery[].asset._ref,
  accommodations[]{
    title,
    subtitle,
    "image": image.asset._ref,
    link,
  },
	metaTags{
		title,
		description,
		'image': image.asset._ref,
	}
}`

export const SitemapQuery = groq`*[ _type in [ "page", "service"] ]{
	_type == "page" && uid.current == "home" => {
		"url": "https://skymacedonia.com/",
		"changefreq": "monthly",
		"priority": 1,
		"lastmod" :_updatedAt,
	},
	_type == "page" && uid.current != "home" => {
		"url": "https://skymacedonia.com/"+uid.current+"/",
		"changefreq": "monthly",
		"priority": 1,
		"lastmod" :_updatedAt,
	},
	_type == "service" => {
		"url": "https://skymacedonia.com/"+uid.current+"/",
		"changefreq": "monthly",
		"priority": 1,
		"lastmod" :_updatedAt,
	},
}`