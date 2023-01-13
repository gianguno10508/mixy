import { gql } from "@apollo/client";

const GET_DETAIL_PRODUCT = gql`
  query GET_DETAIL_PRODUCT($idProduct: ID!) {
    product(id: $idProduct) {
      ... on SimpleProduct {
        id
        productId
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
            author {
              node {
                id
                name
              }
            }
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
        productId
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
            author {
              node {
                id
                name
              }
            }
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
