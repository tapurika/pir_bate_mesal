import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/501-600/61-80.json";

export default function Proverb_561_580() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
