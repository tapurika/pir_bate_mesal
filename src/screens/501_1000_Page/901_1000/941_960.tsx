import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/901-1000/41-60.json";

export default function Proverb_941_960() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
