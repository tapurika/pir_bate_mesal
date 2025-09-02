import ProverbPage_1 from "@/pages/0_500_Page";
// 1 - 100
import ProverbPage_1_20 from "@/pages/0_500_Page/1_100/1_20";
import ProverbPage_21_40 from "@/pages/0_500_Page/1_100/21-40";
import ProverbPage_41_60 from "@/pages/0_500_Page/1_100/41-60";
import ProverbPage_61_80 from "@/pages/0_500_Page/1_100/61_80";
import ProverbPage_81_100 from "@/pages/0_500_Page/1_100/81_100";
// 101 - 200
import ProverbPage_101_200 from "@/pages/0_500_Page/101_200/101_120";
import ProverbPage_121_140 from "@/pages/0_500_Page/101_200/121_140";
import ProverbPage_141_160 from "@/pages/0_500_Page/101_200/141_160";
import ProverbPage_161_180 from "@/pages/0_500_Page/101_200/161_180";
import ProverbPage_181_200 from "@/pages/0_500_Page/101_200/181_200";

const PROVERB_1_500_ROUTES =
  // introduction 1-500
  {
    path: "1-500-proverb",
    subRoute: [
      // 1 - 100 proverb
      {
        index: true,
        Element: ProverbPage_1,
        path: "",
      },
      {
        Element: ProverbPage_1_20,
        path: "1-20",
      },
      { Element: ProverbPage_21_40, path: "21-40" },
      { Element: ProverbPage_41_60, path: "41-60" },
      { Element: ProverbPage_61_80, path: "61-80" },
      { Element: ProverbPage_81_100, path: "81-100" },

      // 101 - 200 proverb
      { Element: ProverbPage_101_200, path: "101-120" },
      { Element: ProverbPage_121_140, path: "121-140" },
      { Element: ProverbPage_141_160, path: "141-160" },
      { Element: ProverbPage_161_180, path: "161-180" },
      { Element: ProverbPage_181_200, path: "181-200" },
    ],
  };

export default PROVERB_1_500_ROUTES;
