module.exports = {
  siteMetadata: {
    title: `Duee Brasil`,
    description: `Agência full service com a expertise necessária para gerenciar múltiplas estratégias de marketing e publicidade, em vários tipos de mídia diferentes, online e offline.`,
    author: `letgodoy.com`,
  },
  plugins: [
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
        short_name: `starter`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#e71576`,
        display: `minimal-ui`,
        icon: `src/images/logo_cinza.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-nprogress`,
    //   options: {
    //     // Setting a color is optional.
    //     color: `pink`,
    //     showSpinner: true,
    //     easing: 'ease',
    //     speed: 500
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
