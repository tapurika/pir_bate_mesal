import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1401-1500/81-100.json";

export default function Proverb_1481_1500() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
