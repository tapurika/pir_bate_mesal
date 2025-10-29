import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1001-1100/21-40.json";

export default function Proverb_1021_1040() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
