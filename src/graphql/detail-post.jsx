import { gql } from "@apollo/client";

const GET_DETAIL_POST = gql`
  query GET_DETAIL_POST($idPost: ID!) {
    post(id: $idPost) {
      id
      postId
      author {
        node {
          firstName
          lastName
          name
          username
          email
        }
      }
      categories {
        nodes {
          categoryId
          name
        }
      }
      content
      date
      slug
      id
      commentCount
      comments {
        nodes {
          id
          content
          author {
            node {
              name
              email
              ... on User {
                id
                email
                firstName
                lastName
              }
              avatar {
                default
              }
            }
          }
          date
        }
      }
      title
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
`;
export default GET_DETAIL_POST;
