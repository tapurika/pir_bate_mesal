import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1101-1200/1-20.json";

export default function Proverb_1101_1120() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
