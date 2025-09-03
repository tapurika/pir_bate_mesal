import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/401-500/81-100.json";

export default function Proverb_481_500() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
