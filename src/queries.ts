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
      video,
      image {
        "src": asset._ref,
        hotspot,
        crop,d
      },
    },
    _type == 'services' => {
      number
    },
    _type == 'contact' => {
      title,
      image {
        "src": asset._ref,
        hotspot,
        crop,
      },
    },
  }
}`

export const ServiceQuery = groq`*[ _type == 'service' && $uid == uid.current ][0]{
  name,
  "uid":uid.current,
  serviceType,
  description,
  "gallery": gallery[].asset._ref,
  accommodations[]{
    title,
    subtitle,
    "image": image.asset._ref,
    link,
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