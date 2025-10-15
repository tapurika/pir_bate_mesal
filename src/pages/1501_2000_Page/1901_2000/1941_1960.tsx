import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/1901-2000/41-60.json";

export default function Proverb_1941_1960() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
