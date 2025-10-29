import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1601-1700/81-100.json";

export default function Proverb_1681_1700() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
