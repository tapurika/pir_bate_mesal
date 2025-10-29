import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1601-1700/1-20.json";

export default function Proverb_1601_1620() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
