import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/1-100/61-80.json";

export default function Proverb_61_80() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
