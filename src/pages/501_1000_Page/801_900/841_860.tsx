import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/801-900/41-60.json";

export default function Proverb_841_860() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
