/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `parsegatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // `gatsby-plugin-apollo`,
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://parseapi.back4app.com/graphql',
        headers: {
          'X-Parse-Application-Id': 'FspvNj4NrCPZQta4r0cvjqmYQmBGzOC364QFB1se',
          'X-Parse-Javascript-Key': 'bCXvcgWbouq1JcLsZFQAABYnLvul58Xs45R1SHPa',
        },
      },
    },
  ],
}
