import { gql } from "@apollo/client";

const CATEGORIES = gql`
    query CATEGORIES {
        productCategories {
            nodes {
              name
              image {
                sourceUrl
              }
              products(first: 9999) {
                nodes {
                  id
                  name
                }
              }
            }
          }
    }
`;
export default CATEGORIES;