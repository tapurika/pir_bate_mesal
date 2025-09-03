import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/501-600/81-100.json";

export default function Proverb_81_100() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
