import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1401-1500/41-60.json";

export default function Proverb_1441_1460() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
