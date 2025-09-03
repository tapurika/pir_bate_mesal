import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/301-400/21-40.json";

export default function Proverb_321_340() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
