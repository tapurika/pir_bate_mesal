import ProverbPage_501 from "@/pages/501_1000_Page";
// 501 - 600
import ProverbPage_501_500 from "@/pages/501_1000_Page/501_600/501_520";
import ProverbPage_521_540 from "@/pages/501_1000_Page/501_600/521-540";
import ProverbPage_541_560 from "@/pages/501_1000_Page/501_600/541-560";
import ProverbPage_561_580 from "@/pages/501_1000_Page/501_600/561_580";
import ProverbPage_581_600 from "@/pages/501_1000_Page/501_600/581_600";

// 601 - 700
import ProverbPage_601_600 from "@/pages/501_1000_Page/601_700/601_620";
import ProverbPage_621_640 from "@/pages/501_1000_Page/601_700/621_640";
import ProverbPage_641_660 from "@/pages/501_1000_Page/601_700/641_660";
import ProverbPage_661_680 from "@/pages/501_1000_Page/601_700/661_680";
import ProverbPage_681_700 from "@/pages/501_1000_Page/601_700/681_700";

// 701 - 800
import ProverbPage_701_700 from "@/pages/501_1000_Page/701_800/701_720";
import ProverbPage_721_740 from "@/pages/501_1000_Page/701_800/721_740";
import ProverbPage_741_760 from "@/pages/501_1000_Page/701_800/741_760";
import ProverbPage_761_780 from "@/pages/501_1000_Page/701_800/761_780";
import ProverbPage_781_800 from "@/pages/501_1000_Page/701_800/781_800";

// 801 - 900
import ProverbPage_801_800 from "@/pages/501_1000_Page/801_900/801_820";
import ProverbPage_821_840 from "@/pages/501_1000_Page/801_900/821_840";
import ProverbPage_841_860 from "@/pages/501_1000_Page/801_900/841_860";
import ProverbPage_861_880 from "@/pages/501_1000_Page/801_900/861_880";
import ProverbPage_881_900 from "@/pages/501_1000_Page/801_900/881_900";

// 901 - 1000
import ProverbPage_901_900 from "@/pages/501_1000_Page/901_1000/901_920";
import ProverbPage_921_940 from "@/pages/501_1000_Page/901_1000/921_940";
import ProverbPage_941_960 from "@/pages/501_1000_Page/901_1000/941_960";
import ProverbPage_961_980 from "@/pages/501_1000_Page/901_1000/961_980";
import ProverbPage_981_1000 from "@/pages/501_1000_Page/901_1000/981_1000";

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
