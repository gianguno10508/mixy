import { gql } from "@apollo/client";

const POSTS = gql`
    query POSTS {
        posts {
            nodes {
              title
              date
              author {
                node {
                  name
                }
              }
              content
            }
        }
    }
`;
export default POSTS;