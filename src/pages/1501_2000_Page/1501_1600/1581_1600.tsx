import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/1501-1600/81-100.json";

export default function Proverb_1581_1600() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
