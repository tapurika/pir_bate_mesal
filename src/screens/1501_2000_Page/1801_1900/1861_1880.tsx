import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1801-1900/61-80.json";

export default function Proverb_1861_1880() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
