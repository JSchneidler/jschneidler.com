module.exports = {
  siteMetadata: {
    title: 'jschneidler.com',
    description: 'Personal site',
    author: 'Jordan Schneidler'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        stripMetadata: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images'
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/typography.ts'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'jschneidler.com',
        short_name: 'jschneidler.com',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
  ]
}
