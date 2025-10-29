import * as React from "react";
import Layout from "../../Layout";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/101-200/1-20.json";

export default function Proverb_101_120() {
  return (
    <Layout>
      <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />
    </Layout>
  );
}
