import { gql } from "@apollo/client";

const CATEGORIES = gql`
    query CATEGORIES {
        productCategories {
            nodes {
              name
              image {
                sourceUrl
              }
              slug
              products(first: 9999) {
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
                  }
                }
              }
            }
          }
    }
`;
export default CATEGORIES;