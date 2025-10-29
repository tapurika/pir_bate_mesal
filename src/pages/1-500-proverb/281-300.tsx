import * as React from "react";
import Layout from "../../Layout";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/201-300/81-100.json";

export default function Proverb_281_300() {
  return (
    <Layout>
      <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />
    </Layout>
  );
}
