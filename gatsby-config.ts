import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: "/pir_bate_mesal",
  siteMetadata: {
    title: "پیر بته مثال",
    siteUrl: "https://tapurika.github.io/pir_bate_mesal",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "GA-TRACKING_ID", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
          // anonymize_ip: true,
        },
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};

export default config;
