import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/801-900/1-20.json";

export default function Proverb_801_820() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
