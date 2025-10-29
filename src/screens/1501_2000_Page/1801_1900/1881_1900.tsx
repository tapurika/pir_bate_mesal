import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1801-1900/81-100.json";

export default function Proverb_1881_1900() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
