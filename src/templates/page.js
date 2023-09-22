import React from 'react'
import { graphql } from "gatsby";
import { useQuery } from '@apollo/client';
import { Link } from 'gatsby';
import gql from 'graphql-tag';
// import parse from "html-react-parser"
const GET_DATA = gql`
query homePageQueryPage($id:  ID!) {    
      wordPressPost(id: $id ){
          title
          content
          id
        }

}
`;

const Page = (props) => {    
    const pageId = props.pageContext.id;
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { id: pageId },
    skip: !pageId
  });


  

//   const { loading, error, data } = useQuery(GET_DATA);
  console.log("props2",props)
  console.log("props3",data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


//   const currentPage = props.data.wpPage;

    // console.log("currentPage",currentPage)
  return (
        //   <div>{parse(currentPage.content)}</div>    
        <div>
            <h1>{data.wordPressPost.title}</h1>
            <div dangerouslySetInnerHTML={{__html:data.wordPressPost.content}} />

            <Link to="/"><h2>Back</h2></Link>
        </div>     
  )
}

export default Page



// export const homePageQueryPage = graphql`

