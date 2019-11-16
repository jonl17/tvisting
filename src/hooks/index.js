import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            address {
              address
              code
            }
            contact {
              mail
              phone
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
