import { gql } from "@apollo/client";

const PAGES = gql`
    query PAGES {
        pages {
            edges {
                node {
                  id
                }
            }
        }
    }
`;
export default PAGES;