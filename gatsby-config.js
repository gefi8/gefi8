module.exports = {
  siteMetadata: {
    title: `GEFI | UnB | 8º Encontro com Imagens e Filosofia`,
    description: `8º Encontro com Imagens e Filosofia Linguagens e Educação como Acontecimento e 1º Colóquio Universidade e Escola sem Muros | 26, 27 e 28 de setembro | Brasília - DF | Universidade de Brasília - UnB`,
    author: `@alvarofernandoms e @nicolepacheco`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
