require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Adam Drake - Web Developer Portfolio`,
    siteTitle: `Adam Drake`,
    siteTitleAlt: `Adam Drake - Web Developer Portfolio`,
    siteHeadline: `Adam Drake - Web Developer Portfolio`,
    siteUrl: `https://adamdrake.cz`,
    siteDescription: `Web Developer Portfolio for Adam Drake`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {
        basepath: `/blog`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-50260984-1'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adam Drake - Web Developer`,
        short_name: `Adam Drake - Web Developer`,
        description: `Web Developer Portfolio for Adam Drake`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
