import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/301-400/81-100.json";

export default function Proverb_381_400() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
