import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/501-600/1-20.json";

export default function Proverb_1_20() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
