import { gql } from "@apollo/client";

const PRODUCTS = gql`
    query PRODUCTS {
        products {
            edges {
              node {
                ... on SimpleProduct {
                  id
                  name
                  regularPrice
                  salePrice
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  galleryImages {
                    edges {
                      node {
                        sourceUrl
                      }
                    }
                  }
                  slug
                  onSale
                  dateOnSaleFrom
                  dateOnSaleTo
                  reviews {
                    averageRating
                  }
                }
              }
            }
        }
    }
`;
export default PRODUCTS;