import { gql } from "@apollo/client";

const RESET_PASSWORD = gql`
  mutation ResetPass ($input: ResetUserPasswordInput!){
    resetUserPassword (input: $input){
      user {
        id
        firstName
        lastName
        username
        email
      }
    }
  }
`;

export default RESET_PASSWORD;
