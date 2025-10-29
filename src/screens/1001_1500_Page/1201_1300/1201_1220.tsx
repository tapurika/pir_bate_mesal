import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1201-1300/1-20.json";

export default function Proverb_1201_1220() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
