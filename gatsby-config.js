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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "Karla\:400,400i,700"
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ragan Martinez`,
        short_name: `RM`,
        start_url: `/`,
        background_color: `#d1d1d1`,
        theme_color: `#777`,
        display: `standalone`,
        icon: `src/assets/images/icons/favicon.png`,
      },
    },
  ],
}
