/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `TVIST auglýsingastofa`,
    about: `Hönnunar- og auglýsingastofan TVIST var sjósett á Grandanum sumarið 2016 eftir að Síminn gaf okkur byr í seglin — og upp frá því hafa fleiri góðir viðskiptavinir slegist í för, líkt og sjá má hér að neðan.`,
    url: `https://tvist.is/`,
    favicon: `/myndir/favicon.png`,
    image: `/myndir/social-share.png`,
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
      { name: `Radíó`, to: `/radio` },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stofan`,
        path: `${__dirname}/static/content/stofan`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `kunnar`,
        path: `${__dirname}/static/content/kunnar`,
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
