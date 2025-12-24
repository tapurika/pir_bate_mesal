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
    <title>پیر بته مثال</title>
    <meta
      name="description"
      content="کتاب پیر بته مثال به زبان تبری یا زبان مازندرانی نوشته شده است و همچنین همراه با ترجمه و مغهوم و کاربرد آن به فارسی برای علاقه مندان تهیه شده است"
    />
  </>
);

export default IndexPage;
