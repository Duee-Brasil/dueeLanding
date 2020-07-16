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
        name: `Duee Brasil`,
        short_name: `Duee`,
        start_url: `/`,
        description: "Branding, Live MKT, Promoções, Digital e Desenvolvimento. A Gente Faz.",
        background_color: `#111111`,
        theme_color: `#e71576`,
        display: `minimal-ui`,
        icon: `src/images/logo_cinza.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '3318356694893542',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-157627202-3", // Google Analytics / GA
          //"AW-145-254-4497", // Google Ads / Adwords / AW //////trocarrrrrrrr
        ], 
          head: true,
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "GTM-NGHBBP8",  //troooooocaaaarrrr
    //     includeInDevelopment: false,
    //     defaultDataLayer: { platform: "gatsby" },
    //   }
    // },
    `gatsby-plugin-offline`,
  ],
}
