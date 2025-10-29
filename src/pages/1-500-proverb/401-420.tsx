import * as React from "react";
import Layout from "../../Layout";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/401-500/1-20.json";

export default function Proverb_401_420() {
  return (
    <Layout>
      <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />
    </Layout>
  );
}
