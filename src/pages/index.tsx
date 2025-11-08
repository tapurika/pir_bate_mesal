import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../Layout";
import HomeScreen from "../screens/Home";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HomeScreen />;
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <>
    <title>Home Page </title>
    <meta name="description" content="Your description" />
  </>
);

export default IndexPage;
