/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `TVIST auglýsingastofa`,
    address: {
      address: `Þórunnartún 2`,
      code: `105 Reykjavík`,
    },
    contact: {
      mail: `tvist@tvist.is`,
      phone: `855 7701`,
    },
    menuitems: [
      { name: `Verkin`, to: `/verkin` },
      { name: `Stofan`, to: `/stofan` },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `myndir`,
        path: `${__dirname}/static/myndir`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `verkefni`,
        path: `${__dirname}/static/content/verkefni`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/static/myndir/svgs`,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-layout`,
  ],
}
