import * as React from "react";

import Layout from "../../Layout";
import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/601-700/61-80.json";

export default function Proverb_661_680() {
  return (
    <Layout>
      <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />
    </Layout>
  );
}
