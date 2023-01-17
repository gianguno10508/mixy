import { gql } from "@apollo/client";

const ADD_TO_CART = gql`
  mutation ATC($input: AddToCartInput!) {
    addToCart(input: $input) {
      cart {
        subtotal
        total
        shippingTotal
        contents {
          itemCount
          nodes {
            product {
              node {
                name
                sku
                databaseId
                ... on SimpleProduct {
                  price
                }
              }
            }
          }
        }
      }
    }
  }
`
export default ADD_TO_CART;