import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1301-1400/81-100.json";

export default function Proverb_1381_1400() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
