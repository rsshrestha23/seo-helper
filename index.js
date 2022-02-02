import { Helmet } from "react-helmet"

export const SEO = (title, description) => {
	return (
		<div>
			<Helmet htmlAttributes>
				<html lang="en" />
				<title>{title}</title>
				<meta name="description" content={description} />
			</Helmet>
		</div>
	);
}



export const DynamicSEO = ({ title, description, meta = [] }) => {
	return (
		<Helmet title={title}
			htmlAttributes={{ lang: "en" }}
			meta={[
				{
					name: `description`,
					content: description,
				}
			]}
		/>
	)
}
