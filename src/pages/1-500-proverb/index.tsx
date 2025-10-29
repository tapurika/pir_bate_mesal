import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../../Layout";
import ProverbPage_1_Screen from "../../screens/0_500_Page";

const ProverbPage_1_Page: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ProverbPage_1_Screen />
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <meta name="description" content="Your description" />
  </>
);

export default ProverbPage_1_Page;
