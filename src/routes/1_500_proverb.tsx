import ProverbPage_1 from "@/pages/0_500_Page";
import ProverbPage_1_20 from "@/pages/0_500_Page/1_100/1_20";
import ProverbPage_21_40 from "@/pages/0_500_Page/1_100/21-40";
import ProverbPage_41_60 from "@/pages/0_500_Page/1_100/41-60";
import ProverbPage_61_80 from "@/pages/0_500_Page/1_100/61_80";
import ProverbPage_81_100 from "@/pages/0_500_Page/1_100/81_100";

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
        Element: ProverbPage_21_40,
        path: "21-40",
      },
      {
        // index: true,
        Element: ProverbPage_41_60,
        path: "41-60",
      },
      {
        // index: true,
        Element: ProverbPage_61_80,
        path: "61-80",
      },
      {
        // index: true,
        Element: ProverbPage_81_100,
        path: "81-100",
      },
    ],
  };

export default PROVERB_1_500_ROUTES;
