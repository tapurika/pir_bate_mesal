import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/1501-1600/1-20.json";

export default function Proverb_1501_1520() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
