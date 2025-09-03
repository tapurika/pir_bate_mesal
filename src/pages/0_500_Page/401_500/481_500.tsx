import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/401-500/81-100.json";

export default function Proverb_181_200() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
