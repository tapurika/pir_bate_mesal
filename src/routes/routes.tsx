import HomePage from "@/pages/Home";
import PROVERB_1_500_ROUTES from "./1_500_proverb";
import PROVERB_501_1000_ROUTES from "./501_1000_proverb";

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
  // introduction 501-1000
  {
    Element: HomePage,
    path: "",
  },
  {
    Element: HomePage,
    path: "",
  },
  {
    Element: HomePage,
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
