import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/1701-1800/21-40.json";

export default function Proverb_1721_1740() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
