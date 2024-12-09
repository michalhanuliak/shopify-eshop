import { gql } from "graphql-request";

export const GET_PRODUCTS_BY_COLLECTION_HANDLE = gql`
  query GetProductsByCollectionHandle(
    $handle: String!
    $first: Int!
    $after: String
  ) {
    collectionByHandle(handle: $handle) {
      id
      title
      products(first: $first, after: $after) {
        edges {
          cursor
          node {
            id
            title
            description
            handle
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
      }
    }
  }
`;
