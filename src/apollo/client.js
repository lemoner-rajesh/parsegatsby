
// // import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
// // // const { ApolloClient, InMemoryCache, HttpLink } = require("@apollo/client");

// // const client = new ApolloClient({
// //   link: new HttpLink({
// //     uri: 'https://FspvNj4NrCPZQta4r0cvjqmYQmBGzOC364QFB1se:bCXvcgWbouq1JcLsZFQAABYnLvul58Xs45R1SHPa@parseapi.back4app.com/graphql', // replace with your Back4App GraphQL endpoint
// //     headers: {
// //       'X-Parse-Application-Id': 'FspvNj4NrCPZQta4r0cvjqmYQmBGzOC364QFB1se', // replace with your App ID
// //       'X-Parse-Javascript-Key': 'bCXvcgWbouq1JcLsZFQAABYnLvul58Xs45R1SHPa' // replace with your Javascript Key
// //     }
// //   }),
// //   cache: new InMemoryCache()
// // });


// // export default client;




// import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// const APP_ID = 'FspvNj4NrCPZQta4r0cvjqmYQmBGzOC364QFB1se';
// const API_KEY = 'bCXvcgWbouq1JcLsZFQAABYnLvul58Xs45R1SHPa';

// const httpLink = new HttpLink({
//   uri: `https://parseapi.back4app.com/graphql`, // Back4App GraphQL endpoint
//   headers: {
//     'X-Parse-Application-Id': APP_ID,
//     'X-Parse-Javascript-Key': API_KEY
//   }
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// });

// export default client;



const { ApolloClient, HttpLink, InMemoryCache } = require('@apollo/client');
const fetch = require('cross-fetch');

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://parseapi.back4app.com/graphql',
      headers: {
    'X-Parse-Application-Id': 'FspvNj4NrCPZQta4r0cvjqmYQmBGzOC364QFB1se',
    'X-Parse-Javascript-Key': 'bCXvcgWbouq1JcLsZFQAABYnLvul58Xs45R1SHPa'
  },
    fetch,
  }),
});

module.exports = client;
