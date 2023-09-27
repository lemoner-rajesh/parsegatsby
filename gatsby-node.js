
const path = require(`path`)

// import { useQuery } from '@apollo/client';
// import gql from 'graphql-tag';
const {useQuery} = require('@apollo/client');
const {gql} = require(`graphql-tag`);

const client = require('./src/apollo/client'); // Replace with your actual path



exports.createPages = async ({ actions }) => {
    const { createPage } = actions;
    const GET_DATA = gql`
query getPost {
  wordPressPosts{
    edges{
      node{        
        slug  
        id
        title
              
      }
    }
  }
}
`;

const { data } = await client.query({ query: GET_DATA });

console.log("data", data.wordPressPosts.edges);

data.wordPressPosts.edges.forEach(item => {
    createPage({
        path:item.node.slug,
      component: path.resolve("./src/templates/page.js"),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        id: item.node.id,
        slug:item.node.slug,
        title:item.node.title
      },
    });
  });

//  console.log("data",data)
// if(data){
//   for(let i = 0; i < data.wordPressPosts.edges.length; i++){
//       const page = data.wordPressPosts.edges[i];
//       createPage({
//           path:page.node.slug,
//           component:pageTemplate,
//           context:{
//             id: page.node.id,
//           }
//       })
//   }
// }


}