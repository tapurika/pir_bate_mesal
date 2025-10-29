import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/1901-2000/1-20.json";

export default function Proverb_1901_1920() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
