import { gql } from "@apollo/client";

const PRODUCTS = gql`
    query PRODUCTS {
      products(first: 99999) {
        nodes {
          ... on SimpleProduct {
            id
            name
            regularPrice
            salePrice
            shortDescription
            weight
            featuredImage {
              node {
                sourceUrl
              }
            }
            galleryImages {
              nodes{
                sourceUrl
              }
            }
            slug
            onSale
            dateOnSaleFrom
            dateOnSaleTo
            reviews {
              averageRating
            }
            productCategories {
              nodes {
                name
                slug
              }
            }
          }
          ... on VariableProduct {
            id
            name
            regularPrice
            salePrice
            shortDescription
            weight
            variations{
              nodes{
                id
                name
                description
                regularPrice
                salePrice
                slug
              }
            }
            
            featuredImage {
              node {
                sourceUrl
              }
            }
            galleryImages {
              nodes{
                sourceUrl
              }
            }
            slug
            onSale
            dateOnSaleFrom
            dateOnSaleTo
            reviews {
              averageRating
            }
            productCategories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    }
`;
export default PRODUCTS;