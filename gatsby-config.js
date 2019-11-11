module.exports = {
  siteMetadata: {
    title: `Gatsby Material UI starter`,
    description: `Kick off your next, great Gatsby project with this default starter and material-ui components. This barebones starter ships with the main Gatsby configuration files you might need and no worries about configuring any of mui stuff by yourself.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `mui-starter`,
        start_url: `/`,
        background_color: "#fff",
        theme_color: "#fff",
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
