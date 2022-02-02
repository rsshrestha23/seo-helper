#For static seo component use SEO(). It requires  two parameter one is title and another is description.
#FOR dynamic seo component use DynamicSEO(). It requires two agruments. One for the title and second one is meta which is array of object

#OpenGraph tags (marked with og:) are crawled by Facebook whenever you share a link through Messenger/ Facebook:
meta={[
        {
          property: "og:url",
          content: someUrl
        },
        {
          property: "og:type",
          content: someArticle
        },
        {
          property: "og:title",
          content: someTitle
        },
        {
          property: "og:description",
          content: someDescription
        },
        {
          property: "og:image",
          content: someImage
        },
        {
          property: "fb:app_id",
          content: someFbAppId
        }
]

#Twitter tags (marked with twitter) are crawled by Twitter accordingly:
meta={[
        {
          property: "twitter:card",
          content: someSummary
        },
        {
          property: "twitter:creator",
          content: someAuthorName
        },
        {
          property: "twitter:title",
          content: someTitle
        },
        {
          property: "twitter:description",
          content: someDescription
        },
        {
          property: "twitter:image",
          content: someImage
        }
]
