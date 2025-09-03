import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/301-400/1-20.json";

export default function Proverb_301_320() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
