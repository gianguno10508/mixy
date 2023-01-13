import { gql } from "@apollo/client";

const POSTS = gql`
    query POSTS {
        posts {
            nodes {
              id
              postId
              title
              date
              author {
                node {
                  name
                }
              }
              content
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
        }
    }
`;
export default POSTS;