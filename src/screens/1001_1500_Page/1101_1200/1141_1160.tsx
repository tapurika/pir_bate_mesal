import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1101-1200/41-60.json";

export default function Proverb_1141_1160() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
