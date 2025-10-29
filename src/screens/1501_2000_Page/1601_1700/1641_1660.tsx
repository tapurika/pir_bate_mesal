import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1601-1700/41-60.json";

export default function Proverb_1641_1660() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
