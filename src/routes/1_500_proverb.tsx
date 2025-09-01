import ProverbPage_1 from "@/pages/0_500_Page";
import ProverbPage_1_20 from "@/pages/0_500_Page/1_100/1_20";

const PROVERB_1_500_ROUTES =
  // introduction 1-500
  {
    path: "1-500-proverb",
    subRoute: [
      {
        index: true,
        Element: ProverbPage_1,
      },
      {
        // index: true,
        Element: ProverbPage_1_20,
        path: "1-20",
      },
      {
        // index: true,
        Element: ProverbPage_1,
        path: "21-40",
      },
      {
        // index: true,
        Element: ProverbPage_1,
        path: "41-60",
      },
      {
        // index: true,
        Element: ProverbPage_1,
        path: "61-80",
      },
      {
        // index: true,
        Element: ProverbPage_1,
        path: "81-100",
      },
    ],
  };

export default PROVERB_1_500_ROUTES;
