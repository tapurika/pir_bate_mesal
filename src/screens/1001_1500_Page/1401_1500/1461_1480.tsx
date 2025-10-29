import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1401-1500/61-80.json";

export default function Proverb_1461_1480() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
