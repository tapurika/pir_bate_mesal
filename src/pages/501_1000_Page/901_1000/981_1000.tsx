import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/901-1000/81-100.json";

export default function Proverb_981_1000() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
