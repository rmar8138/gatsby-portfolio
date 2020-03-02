require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Ragan Martinez`,
    description: `Web Developer, Sydney Australia`,
    author: `Ragan Martinez`,
    socials: [
      {
        name: "GitHub",
        link: "https://github.com/rmar8138",
        icon: "https://img.icons8.com/material/24/000000/github.png",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/ragan-martinez-151834158/",
        icon: "https://img.icons8.com/android/24/000000/linkedin.png",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/raganmartinez",
        icon: "https://img.icons8.com/android/24/000000/twitter.png",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
