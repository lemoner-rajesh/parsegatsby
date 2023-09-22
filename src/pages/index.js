import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { Link } from 'gatsby';



// const GET_POSTS = gql`
// query getPost {
// 	posts{
//     edges{
//       node{
//         Title
//         Description
//         id
//       }
//     }
//   }
// }
// `;


const GET_POSTS = gql`
query getPost {
  wordPressPosts{
    edges{
      node{
        title
        slug        
      }
    }
  }
}
`;

const MyComponent = (props) => {
  console.log("props", props)
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {console.log(data)}
       {data.wordPressPosts.edges.map(item => (
        <Link to={item.node.slug}>
        <h4 key={item.node.id}>{item.node.title}</h4>
        </Link>
   
      ))}

    </div>
  );
};

export default MyComponent;

