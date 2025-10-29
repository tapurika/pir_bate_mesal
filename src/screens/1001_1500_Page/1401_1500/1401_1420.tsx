import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1401-1500/1-20.json";

export default function Proverb_1401_1420() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
