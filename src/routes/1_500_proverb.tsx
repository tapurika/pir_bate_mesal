// wrapper
import ProverbPage_1 from "@/pages/0_500_Page";
// 1 - 100
import ProverbPage_1_20 from "@/pages/0_500_Page/1_100/1_20";
import ProverbPage_21_40 from "@/pages/0_500_Page/1_100/21-40";
import ProverbPage_41_60 from "@/pages/0_500_Page/1_100/41-60";
import ProverbPage_61_80 from "@/pages/0_500_Page/1_100/61_80";
import ProverbPage_81_100 from "@/pages/0_500_Page/1_100/81_100";
// 101 - 200
import ProverbPage_101_120 from "@/pages/0_500_Page/101_200/101_120";
import ProverbPage_121_140 from "@/pages/0_500_Page/101_200/121_140";
import ProverbPage_141_160 from "@/pages/0_500_Page/101_200/141_160";
import ProverbPage_161_180 from "@/pages/0_500_Page/101_200/161_180";
import ProverbPage_181_200 from "@/pages/0_500_Page/101_200/181_200";
// 201 - 300
import ProverbPage_201_220 from "@/pages/0_500_Page/201_300/201_220";
import ProverbPage_221_240 from "@/pages/0_500_Page/201_300/221_240";
import ProverbPage_241_260 from "@/pages/0_500_Page/201_300/241_260";
import ProverbPage_261_280 from "@/pages/0_500_Page/201_300/261_280";
import ProverbPage_281_300 from "@/pages/0_500_Page/201_300/281_300";
// 301 - 400
import ProverbPage_301_320 from "@/pages/0_500_Page/301_400/301_320";
import ProverbPage_321_340 from "@/pages/0_500_Page/301_400/321_340";
import ProverbPage_341_360 from "@/pages/0_500_Page/301_400/341_360";
import ProverbPage_361_380 from "@/pages/0_500_Page/301_400/361_380";
import ProverbPage_381_400 from "@/pages/0_500_Page/301_400/381_400";
// 401 - 500
import ProverbPage_401_420 from "@/pages/0_500_Page/401_500/401_420";
import ProverbPage_421_440 from "@/pages/0_500_Page/401_500/421_440";
import ProverbPage_441_460 from "@/pages/0_500_Page/401_500/441_460";
import ProverbPage_461_480 from "@/pages/0_500_Page/401_500/461_480";
import ProverbPage_481_500 from "@/pages/0_500_Page/401_500/481_500";

const PROVERB_1_500_ROUTES =
  // introduction 1-500
  {
    path: "1-500-proverb",
    subRoute: [
      // introduction 1 - 500 proverb
      {
        index: true,
        Element: ProverbPage_1,
        path: "",
      },

      // 1 - 100 proverb
      {
        Element: ProverbPage_1_20,
        path: "1-20",
      },
      { Element: ProverbPage_21_40, path: "21-40" },
      { Element: ProverbPage_41_60, path: "41-60" },
      { Element: ProverbPage_61_80, path: "61-80" },
      { Element: ProverbPage_81_100, path: "81-100" },

      // 101 - 200 proverb
      { Element: ProverbPage_101_120, path: "101-120" },
      { Element: ProverbPage_121_140, path: "121-140" },
      { Element: ProverbPage_141_160, path: "141-160" },
      { Element: ProverbPage_161_180, path: "161-180" },
      { Element: ProverbPage_181_200, path: "181-200" },

      // 201 - 300 proverb
      { Element: ProverbPage_201_220, path: "201-220" },
      { Element: ProverbPage_221_240, path: "221-240" },
      { Element: ProverbPage_241_260, path: "241-260" },
      { Element: ProverbPage_261_280, path: "261-280" },
      { Element: ProverbPage_281_300, path: "281-300" },

      // 301 - 400 proverb
      { Element: ProverbPage_301_320, path: "301-320" },
      { Element: ProverbPage_321_340, path: "321-340" },
      { Element: ProverbPage_341_360, path: "341-360" },
      { Element: ProverbPage_361_380, path: "361-380" },
      { Element: ProverbPage_381_400, path: "381-400" },

      // 401 - 500 proverb
      { Element: ProverbPage_401_420, path: "401-420" },
      { Element: ProverbPage_421_440, path: "421-440" },
      { Element: ProverbPage_441_460, path: "441-460" },
      { Element: ProverbPage_461_480, path: "461-480" },
      { Element: ProverbPage_481_500, path: "481-500" },
    ],
  };

export default PROVERB_1_500_ROUTES;
