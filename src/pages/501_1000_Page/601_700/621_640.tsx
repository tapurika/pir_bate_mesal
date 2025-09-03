import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/601-700/21-40.json";

export default function Proverb_121_140() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
