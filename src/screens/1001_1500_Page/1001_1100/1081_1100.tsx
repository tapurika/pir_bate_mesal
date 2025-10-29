import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1001-1100/80-100.json";

export default function Proverb_1081_1100() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
