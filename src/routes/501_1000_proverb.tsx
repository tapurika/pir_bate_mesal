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
      // introduction 501 - 1000 proverb
      {
        index: true,
        Element: ProverbPage_1,
        path: "",
      },

      // 501 - 600 proverb
      { Element: ProverbPage_101_200, path: "501-520" },
      { Element: ProverbPage_121_140, path: "521-540" },
      { Element: ProverbPage_141_160, path: "541-560" },
      { Element: ProverbPage_161_180, path: "561-580" },
      { Element: ProverbPage_181_200, path: "581-600" },

      // 601 - 700 proverb
      { Element: ProverbPage_101_200, path: "601-620" },
      { Element: ProverbPage_121_140, path: "621-640" },
      { Element: ProverbPage_141_160, path: "641-660" },
      { Element: ProverbPage_161_180, path: "661-680" },
      { Element: ProverbPage_181_200, path: "681-700" },

      // 701 - 800 proverb
      { Element: ProverbPage_101_200, path: "701-720" },
      { Element: ProverbPage_121_140, path: "721-740" },
      { Element: ProverbPage_141_160, path: "741-760" },
      { Element: ProverbPage_161_180, path: "761-780" },
      { Element: ProverbPage_181_200, path: "781-800" },

      // 801 - 900 proverb
      { Element: ProverbPage_101_200, path: "801-820" },
      { Element: ProverbPage_121_140, path: "821-840" },
      { Element: ProverbPage_141_160, path: "841-860" },
      { Element: ProverbPage_161_180, path: "861-880" },
      { Element: ProverbPage_181_200, path: "881-900" },

      // 901 - 1000 proverb
      { Element: ProverbPage_101_200, path: "901-920" },
      { Element: ProverbPage_121_140, path: "921-940" },
      { Element: ProverbPage_141_160, path: "941-960" },
      { Element: ProverbPage_161_180, path: "961-980" },
      { Element: ProverbPage_181_200, path: "981-1000" },
    ],
  };

export default PROVERB_1_500_ROUTES;
