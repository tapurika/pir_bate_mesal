import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/1901-2000/61-80.json";

export default function Proverb_1961_1980() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
