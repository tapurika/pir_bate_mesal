import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/1301-1400/1-20.json";

export default function Proverb_1301_1320() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
