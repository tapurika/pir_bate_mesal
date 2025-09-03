import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/901-1000/61-80.json";

export default function Proverb_961_980() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
