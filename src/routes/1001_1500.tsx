import ProverbPage_501 from "@/pages/501_1000_Page";

// 1001 - 1100
import ProverbPage_1011_1020 from "@/pages/501_1000_Page/";
import ProverbPage_1021_1040 from "@/pages/501_1000_Page/901_1000/961_980";
import ProverbPage_1041_1060 from "@/pages/501_1000_Page/901_1000/921_940";
import ProverbPage_1061_1080 from "@/pages/501_1000_Page/901_1000/941_960";
import ProverbPage_1081_1100 from "@/pages/501_1000_Page/901_1000/981_1000";

const PROVERB_1_500_ROUTES =
  // introduction 1-500
  {
    path: "501-1000-proverb",
    subRoute: [
      // introduction 501 - 1000 proverb
      {
        index: true,
        Element: ProverbPage_501,
        path: "",
      },

      // 501 - 600 proverb
      { Element: ProverbPage_501_500, path: "501-520" },
      { Element: ProverbPage_521_540, path: "521-540" },
      { Element: ProverbPage_541_560, path: "541-560" },
      { Element: ProverbPage_561_580, path: "561-580" },
      { Element: ProverbPage_581_600, path: "581-600" },

      // 601 - 700 proverb
      { Element: ProverbPage_601_600, path: "601-620" },
      { Element: ProverbPage_621_640, path: "621-640" },
      { Element: ProverbPage_641_660, path: "641-660" },
      { Element: ProverbPage_661_680, path: "661-680" },
      { Element: ProverbPage_681_700, path: "681-700" },

      // 701 - 800 proverb
      { Element: ProverbPage_701_700, path: "701-720" },
      { Element: ProverbPage_721_740, path: "721-740" },
      { Element: ProverbPage_741_760, path: "741-760" },
      { Element: ProverbPage_761_780, path: "761-780" },
      { Element: ProverbPage_781_800, path: "781-800" },

      // 801 - 900 proverb
      { Element: ProverbPage_801_800, path: "801-820" },
      { Element: ProverbPage_821_840, path: "821-840" },
      { Element: ProverbPage_841_860, path: "841-860" },
      { Element: ProverbPage_861_880, path: "861-880" },
      { Element: ProverbPage_881_900, path: "881-900" },

      // 901 - 1000 proverb
      { Element: ProverbPage_901_900, path: "901-920" },
      { Element: ProverbPage_921_940, path: "921-940" },
      { Element: ProverbPage_941_960, path: "941-960" },
      { Element: ProverbPage_961_980, path: "961-980" },
      { Element: ProverbPage_981_1000, path: "981-1000" },
    ],
  };

export default PROVERB_1_500_ROUTES;
