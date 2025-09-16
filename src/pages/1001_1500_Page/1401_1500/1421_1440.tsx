import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/1401-1500/21-40.json";

export default function Proverb_1421_1440() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
