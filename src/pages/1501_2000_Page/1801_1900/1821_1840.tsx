import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/1801-1900/21-40.json";

export default function Proverb_1821_1840() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
