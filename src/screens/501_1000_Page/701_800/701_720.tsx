import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/701-800/1-20.json";

export default function Proverb_701_720() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
