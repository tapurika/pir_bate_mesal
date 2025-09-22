import HomePage from "@/pages/Home";
import PROVERB_1_500_ROUTES from "./1_500_proverb";
import PROVERB_501_1000_ROUTES from "./501_1000_proverb";
import PROVERB_1001_1500_ROUTES from "./1001_1500_proverb";
import PROVERB_1501_2000_ROUTES from "./1501_2000_proverb";
import WriterPage from "@/pages/Writer";

interface IRoutes {
  index?: boolean;
  path: string;
  Element?: React.FC;
  subRoute?: { index?: boolean; path: string; Element: React.FC }[];
}

const ROUTES: IRoutes[] = [
  {
    index: true,
    Element: HomePage,
    path: "",
  },
  PROVERB_1_500_ROUTES,
  PROVERB_501_1000_ROUTES,
  PROVERB_1001_1500_ROUTES,
  PROVERB_1501_2000_ROUTES,
  {
    Element: WriterPage,
    path: "writer",
  },
  {
    Element: HomePage,
    path: "about-us",
  },
  {
    Element: HomePage,
    path: "contact-us",
  },
];

export default ROUTES;
