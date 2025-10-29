import * as React from "react";

import Layout from "../../Layout";
import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1001-1100/1-20.json";

export default function Proverb_1001_1020() {
  return (
    <Layout>
      <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />
    </Layout>
  );
}
