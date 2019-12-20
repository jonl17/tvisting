import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

const SEO = ({
  verktitle,
  data: {
    site: {
      siteMetadata: { title, about: description, url, favicon, image },
    } /** vantar favicon og share-mynd */,
  },
}) => {
  return (
    <>
      <Helmet title={verktitle + title}>
        <meta name="title" content={verktitle}></meta>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        {url && <meta property="og:url" content={url} />}
        {title && <meta property="og:title" content={title} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {image && <meta property="og:image" content={image} />}
        <link sizes="32x32" href={favicon} rel="icon" type="image/png"></link>
      </Helmet>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            about
            url
            favicon
            image
          }
        }
      }
    `}
    render={data => <SEO data={data} {...props}></SEO>}
  ></StaticQuery>
)
