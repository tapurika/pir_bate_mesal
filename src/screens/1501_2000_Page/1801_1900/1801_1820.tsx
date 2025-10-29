import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1801-1900/1-20.json";

export default function Proverb_1801_1820() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
