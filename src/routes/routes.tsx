import HomePage from "@/pages/Home";
import PROVERB_1_500_ROUTES from "./1_500_proverb";

const ROUTES = [
  {
    index: true,
    Element: HomePage,
    path: "",
  },
  PROVERB_1_500_ROUTES,

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
