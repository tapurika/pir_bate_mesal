import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/1801-1900/41-60.json";

export default function Proverb_1841_1860() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
