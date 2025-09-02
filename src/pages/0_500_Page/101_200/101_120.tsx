import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/101-200/1-20.json";

export default function Proverb_101_120() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
