import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/601-700/41-60.json";

export default function Proverb_641_660() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
