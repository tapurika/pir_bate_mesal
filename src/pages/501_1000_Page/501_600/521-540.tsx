import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/501-600/21-40.json";

export default function Proverb_521_540() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
