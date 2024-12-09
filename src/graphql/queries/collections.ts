import { gql } from "graphql-request";

export const GET_COLLECTIONS = gql`
  query GetCollections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
        }
      }
    }
  }
`;
