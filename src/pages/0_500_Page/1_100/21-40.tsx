import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/1-100/21-40.json";

export default function Proverb_21_40() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
