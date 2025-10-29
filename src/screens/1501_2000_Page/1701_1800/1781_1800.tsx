import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1701-1800/81-100.json";

export default function Proverb_1781_1800() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
