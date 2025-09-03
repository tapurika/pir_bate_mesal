import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/401-500/21-40.json";

export default function Proverb_421_440() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
