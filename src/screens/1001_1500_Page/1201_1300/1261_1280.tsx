import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1201-1300/61-80.json";

export default function Proverb_1261_1280() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
