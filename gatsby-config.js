module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `HBUI - The Hummingbot Design System`,
        short_name: `HBUI`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#5FFFD7`,
        display: `minimal-ui`,
        icon: './src/assets/favicon.svg',
      },
    },
  ],
}
