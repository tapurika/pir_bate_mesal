import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/801-900/81-100.json";

export default function Proverb_881_900() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
