import * as React from "react";

import Layout from "../../Layout";
import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/801-900/1-20.json";

export default function Proverb_801_820() {
  return (
    <Layout>
      <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />
    </Layout>
  );
}
