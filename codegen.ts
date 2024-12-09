import dotenv from "dotenv";
dotenv.config();

/** @type {import('@graphql-codegen/cli').CodegenConfig} */
const config = {
  schema: [
    {
      [process.env.GRAPHQL_ENDPOINT as string]: {
        headers: {
          "X-Shopify-Storefront-Access-Token":
            process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        },
      },
    },
  ],
  documents: "./src/graphql/**/*.ts",
  generates: {
    "./src/graphql/generated-types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        avoidOptionals: true,
        dedupeFragments: true,
        namingConvention: "keep",
      },
    },
  },
};

module.exports = config;
