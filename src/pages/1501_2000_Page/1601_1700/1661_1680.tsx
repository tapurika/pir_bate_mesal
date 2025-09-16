import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/1601-1700/61-80.json";

export default function Proverb_1661_1680() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
