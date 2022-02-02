import { Helmet } from "react-helmet"

export const SEO = (title, description) => {
	return <Helmet htmlAttributes>
		<html lang="en" />
		<title>{title}</title>
		<meta name="description" content={description} />
	</Helmet>

}



export const DynamicSEO = ({ title, meta = [] }) => {
	return <Helmet title={title}
		htmlAttributes={{ lang: "en" }}
		meta={meta}
	/>
}
