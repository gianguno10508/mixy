import { gql } from "@apollo/client";

const GET_DETAIL_PRODUCT = gql`
  query GET_DETAIL_PRODUCT($idProduct: ID!) {
    product(id: $idProduct) {
      ... on SimpleProduct {
        id
        name
        averageRating
        commentCount
        description
        excerpt
        galleryImages {
          nodes {
            mediaItemUrl
          }
        }
        price
        regularPrice
        reviewCount
        reviews {
          averageRating
          nodes {
            id
            commentId
            content
            date
          }
        }
        slug
        title
        productCategories {
          nodes {
            id
            name
            slug
          }
        }
      }
      ... on VariableProduct {
        id
        name
        averageRating
        commentCount
        description
        excerpt
        galleryImages {
          nodes {
            mediaItemUrl
          }
        }
        price
        regularPrice
        reviewCount
        reviews {
          averageRating
          nodes {
            id
            commentId
            content
            date
          }
        }
        slug
        title
        productCategories {
          nodes {
            id
            name
            slug
          }
        }
        variations {
          nodes {
            id
            slug
            regularPrice
            salePrice
            name
            description
            attributes {
              nodes {
                label
              }
            }
          }
        }
      }
    }
  }
`;
export default GET_DETAIL_PRODUCT;
