import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/201-300/81-100.json";

export default function Proverb_181_200() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
