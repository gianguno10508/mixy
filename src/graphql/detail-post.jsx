import { gql } from "@apollo/client";

const GET_DETAIL_POST = gql`
  query GET_DETAIL_POST($idPage: ID!) {
    post(id: $idPage) {
      author {
        node {
          firstName
          lastName
          name
          username
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
