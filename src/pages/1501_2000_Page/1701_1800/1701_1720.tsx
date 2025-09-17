import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/1701-1800/1-20.json";

export default function Proverb_1701_1720() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
