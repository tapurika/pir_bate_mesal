import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/1501-1600/21-40.json";

export default function Proverb_1521_1540() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
