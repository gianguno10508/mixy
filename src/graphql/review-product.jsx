import { gql } from "@apollo/client";

const REVIEW_PRODUCT = gql`
  mutation REVIEW_PRODUCT($input: WriteReviewInput!) {
    writeReview(input: $input) {
        rating
    }
  }
`;
export default REVIEW_PRODUCT;
