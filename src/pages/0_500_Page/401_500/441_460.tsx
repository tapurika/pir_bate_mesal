import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/401-500/41-60.json";

export default function Proverb_441_460() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
