import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1001-1100/61-80.json";

export default function Proverb_1061_1080() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
