import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/601-700/1-20.json";

export default function Proverb_601_620() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
