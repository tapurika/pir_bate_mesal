import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1501-1600/61-80.json";

export default function Proverb_1561_1580() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
