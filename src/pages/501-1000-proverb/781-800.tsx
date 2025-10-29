import * as React from "react";

import Layout from "../../Layout";
import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/701-800/81-100.json";

export default function Proverb_781_800() {
  return (
    <Layout>
      <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />
    </Layout>
  );
}
