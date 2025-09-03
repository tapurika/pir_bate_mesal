import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/901-1000/1-20.json";

export default function Proverb_101_120() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
