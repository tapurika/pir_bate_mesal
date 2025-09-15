import ProverbPage_1001 from "@/pages/1001_1500_Page";

// 1001 - 1100
import ProverbPage_1011_1020 from "@/pages/1001_1500_Page/1001_1100/1001_1020";
import ProverbPage_1021_1040 from "@/pages/1001_1500_Page/1001_1100/1021_1040";
import ProverbPage_1041_1060 from "@/pages/1001_1500_Page/1001_1100/1041_1060";
import ProverbPage_1061_1080 from "@/pages/1001_1500_Page/1001_1100/1061_1080";
import ProverbPage_1081_1100 from "@/pages/1001_1500_Page/1001_1100/1081_1100";

// 1101 - 1200
import ProverbPage_1111_1120 from "@/pages/1001_1500_Page/1001_1100/1101_1120";
import ProverbPage_1121_1140 from "@/pages/1001_1500_Page/1001_1100/1121_1140";
import ProverbPage_1141_1160 from "@/pages/1001_1500_Page/1001_1100/1141_1160";
import ProverbPage_1161_1180 from "@/pages/1001_1500_Page/1001_1100/1161_1180";
import ProverbPage_1181_1200 from "@/pages/1001_1500_Page/1001_1100/1181_1200";

const PROVERB_1_500_ROUTES =
  // introduction 1-500
  {
    path: "501-1000-proverb",
    subRoute: [
      // introduction 1001 - 1500 proverb
      {
        index: true,
        Element: ProverbPage_1001,
        path: "",
      },

      // 1001 - 1100 proverb
      { Element: ProverbPage_1011_1020, path: "1001-1020" },
      { Element: ProverbPage_1021_1040, path: "1021-1040" },
      { Element: ProverbPage_1041_1060, path: "1041-1060" },
      { Element: ProverbPage_1061_1080, path: "1061-1080" },
      { Element: ProverbPage_1081_1100, path: "1081-1100" },
    ],
  };

export default PROVERB_1_500_ROUTES;
