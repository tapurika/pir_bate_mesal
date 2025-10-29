import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1301-1400/61-80.json";

export default function Proverb_1361_1380() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
