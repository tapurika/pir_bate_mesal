import * as React from "react";
import Layout from "../../Layout";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/401-500/61-80.json";

export default function Proverb_461_480() {
  return (
    <Layout>
      <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />
    </Layout>
  );
}
