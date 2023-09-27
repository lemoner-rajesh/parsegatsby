/**
 * @type {import('gatsby').GatsbyConfig}
 */

// require('dotenv').config();
require('dotenv').config();

const app = process.env.APP;
const javascript = process.env.JAVASCRIPT;

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
          'X-Parse-Application-Id': app,
          'X-Parse-Javascript-Key': javascript
        },
      },
    }

  ],
}
