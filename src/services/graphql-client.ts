import { GraphQLClient } from "graphql-request";

if (
  !process.env.GRAPHQL_ENDPOINT ||
  !process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
) {
  throw new Error("Missing required environment variables.");
}

const graphqlClient = new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token":
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
});

export default graphqlClient;
