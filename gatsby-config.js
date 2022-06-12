module.exports = {
  siteMetadata: {
    title: `First Gatsby Site`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'blog',
        path: `${__dirname}/blog`
      }
    }
  ],
}
