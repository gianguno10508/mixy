import { gql } from "@apollo/client";

const CATEGORIES = gql`
    query CATEGORIES {
        productCategories {
            nodes {
                name
            }
        }
    }
`;
export default CATEGORIES;