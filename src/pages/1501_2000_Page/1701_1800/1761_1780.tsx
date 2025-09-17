import ProverbPageUI from "@/common/ProverbPageUI";
import dataJSON from "@/sources/1701-1800/61-80.json";

export default function Proverb_1761_1780() {
  return <ProverbPageUI proverbData={dataJSON as IProverbCard[]} />;
}
