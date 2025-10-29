import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1601-1700/21-40.json";

export default function Proverb_1621_1640() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
