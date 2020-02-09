module.exports = {
  siteMetadata: {
    title: `Ragan Martinez`,
    description: `Web Developer, Sydney Australia`,
    author: `Ragan Martinez`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Karla`,
            variants: [`400`, `400i`, `700`],
          },
        ],
      },
    },
  ],
}
