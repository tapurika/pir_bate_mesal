import * as React from "react";

import ProverbPageUI from "../../common/ProverbPageUI";
import dataJSON from "../../sources/801-900/61-80.json";

export default function Proverb_861_880() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
