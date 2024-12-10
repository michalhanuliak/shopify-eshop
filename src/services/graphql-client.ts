import { GraphQLClient } from "graphql-request";

if (
  !process.env.SHOPIFY_DOMAIN ||
  !process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
) {
  throw new Error("Missing required environment variables.");
}

const graphqlClient = new GraphQLClient(
  // TODO: Move version to env variable
  `${process.env.SHOPIFY_DOMAIN}/api/2024-10/graphql.json`,
  {
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token":
        process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
  }
);

export default graphqlClient;
