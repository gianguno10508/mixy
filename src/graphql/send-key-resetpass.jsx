import { gql } from "@apollo/client";

const SEND_RESET_PASSWORD = gql`
  mutation SendMailReset ($input: SendPasswordResetEmailInput!){
    sendPasswordResetEmail (input: $input){
      success
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

export default SEND_RESET_PASSWORD;
