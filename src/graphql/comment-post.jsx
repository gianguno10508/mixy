import { gql } from "@apollo/client";

const CREATE_COMMENT_POST = gql`
  mutation CREATE_COMMENT_POST($input: CreateCommentInput!) {
    createComment(input: $input) {
      success
      comment {
        id
        content
        author {
          node {
            name
          }
        }
        commentId
      }
    }
  }
`;

export default CREATE_COMMENT_POST;
