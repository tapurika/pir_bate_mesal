import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/1901-2000/21-40.json";

export default function Proverb_1921_1940() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
