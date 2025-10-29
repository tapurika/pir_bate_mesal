import * as React from "react";
import Layout from "../../Layout";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/301-400/1-20.json";

export default function Proverb_301_320() {
  return (
    <Layout>
      <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />
    </Layout>
  );
}
