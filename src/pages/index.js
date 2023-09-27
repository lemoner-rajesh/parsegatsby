import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { Link } from 'gatsby';
// import { StaticImage } from "gatsby-plugin-image";

// import { GatsbyImage, getImage } from "gatsby-plugin-image"


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
// 'title' => $post->post_title,
// 'content' => $post->post_content,
// 'slug' => $post->post_name,
// 'postStatus' => $post->post_status,
// 'short_title_acf' => $short_title_acf,
// 'short_description_acf' => $short_description_acf,
// 'thumbnail_acf' => $thumbnail_acf,
// 'featured_image_acf' => $featured_image_acf,
// 'data_picker_acf' => $data_picker_acf,

const GET_POSTS = gql`
query getPost {
  wordPressPosts{
    edges{
      node{
        title
        slug 
        postStatus 
        short_title_acf  
        short_description_acf   
        thumbnail_acf 
        data_picker_acf
      }
    }
  }
}
`;
const imageTest = "https://dev-wordpressparse.pantheonsite.io/wp-content/uploads/2023/09/600.png";
const MyComponent = (props) => {
  console.log("props", props)
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <div>

<section className="news pt-0">
  <div className="container mt-md-5">
    <h2 className="mx-4 my-0 text-center">Recent News</h2>
    <ul className="row d-lg-flex list-unstyled image-block justify-content-center px-lg-0 mx-lg-0">
     
    {data.wordPressPosts.edges.map(item => (
      <li className="col-lg-3 col-md-3 image-block full-width p-3">
        <div className="image-block-inner">
{/* 
          <p>asdf</p>
          <GatsbyImage image={getImage(item.node.thumbnail_acf.url)} alt="Description" />
          <p>asdf</p>
         */}
          <a className="mh-100" href="#">
            <img src={item.node.thumbnail_acf && item.node.thumbnail_acf.url?item.node.thumbnail_acf.url:null} alt={item.node.thumbnail_acf && item.node.thumbnail_acf.alt && item.node.thumbnail_acf.alt} className="img-responsive w-100" /></a>
            <span  className="hp-posts-cat postStatus">Post status: {item.node.postStatus}</span>
            {/* const image = getImage(data.back4app.someQuery.image) */}
   

            {/* {console.log("image",item.node.thumbnail_acf.url)} */}
          <span className="hp-posts-cat">{item.node.data_picker_acf}</span>
          
          <h4 className="mt-3"><a href="#">{item.node.short_title_acf}</a></h4>
       <p>{item.node.short_description_acf}</p>
     

          <a href={item.node.slug} className="read-more">Read more </a>
       
        </div>
      </li>

))}

      
    </ul>
  </div>
</section>

      {/* {console.log(data)}
       {data.wordPressPosts.edges.map(item => (
        <Link to={item.node.slug}>
        <h4 key={item.node.id}>{item.node.title}</h4>
        </Link>
   
      ))} */}

    </div>
  );
};

export default MyComponent;

