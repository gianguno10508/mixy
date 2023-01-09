import { gql } from "@apollo/client";

const UPDATE_ACCOUNT = gql`
    mutation UPDATE_ACCOUNT ( $input: UpdateUserInput!) {
        updateUser(input: $input) {
            user {
                id
                username
                name
                email
                firstName
                lastName
            }
        }
    }
`;

export default UPDATE_ACCOUNT;
