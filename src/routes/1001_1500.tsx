import ProverbPage_1001 from "@/pages/1001_1500_Page";

// 1001 - 1100
import ProverbPage_1011_1020 from "@/pages/1001_1500_Page/1001_1100/1001_1020";
import ProverbPage_1021_1040 from "@/pages/1001_1500_Page/1001_1100/1021_1040";
import ProverbPage_1041_1060 from "@/pages/1001_1500_Page/1001_1100/1041_1060";
import ProverbPage_1061_1080 from "@/pages/1001_1500_Page/1001_1100/1061_1080";
import ProverbPage_1081_1100 from "@/pages/1001_1500_Page/1001_1100/1081_1100";

// 1101 - 1200
import ProverbPage_1101_1120 from "@/pages/1001_1500_Page/1101_1200/1101_1120";
import ProverbPage_1121_1140 from "@/pages/1001_1500_Page/1101_1200/1121_1140";
import ProverbPage_1141_1160 from "@/pages/1001_1500_Page/1101_1200/1141_1160";
import ProverbPage_1161_1180 from "@/pages/1001_1500_Page/1101_1200/1161_1180";
import ProverbPage_1181_1200 from "@/pages/1001_1500_Page/1101_1200/1181_1200";

// 1201 - 1300
import ProverbPage_1201_1220 from "@/pages/1001_1500_Page/1201_1300/1201_1220";
import ProverbPage_1221_1240 from "@/pages/1001_1500_Page/1201_1300/1221_1240";
import ProverbPage_1241_1260 from "@/pages/1001_1500_Page/1201_1300/1241_1260";
import ProverbPage_1261_1280 from "@/pages/1001_1500_Page/1201_1300/1261_1280";
import ProverbPage_1281_1300 from "@/pages/1001_1500_Page/1201_1300/1281_1300";

// 1301 - 1400
import ProverbPage_1301_1320 from "@/pages/1001_1500_Page/1301_1400/1301_1320";
import ProverbPage_1321_1340 from "@/pages/1001_1500_Page/1301_1400/1321_1340";
import ProverbPage_1341_1360 from "@/pages/1001_1500_Page/1301_1400/1341_1360";
import ProverbPage_1361_1380 from "@/pages/1001_1500_Page/1301_1400/1361_1380";
import ProverbPage_1381_1400 from "@/pages/1001_1500_Page/1301_1400/1381_1400";

// 1401 - 1500
// import ProverbPage_1401_1420 from "@/pages/1001_1500_Page/1401_1500/1401_1420";
// import ProverbPage_1421_1440 from "@/pages/1001_1500_Page/1401_1500/1421_1440";
// import ProverbPage_1441_1460 from "@/pages/1001_1500_Page/1401_1500/1441_1460";
// import ProverbPage_1461_1480 from "@/pages/1001_1500_Page/1401_1500/1461_1480";
// import ProverbPage_1481_1500 from "@/pages/1001_1500_Page/1401_1500/1481_1500";

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

      // 1101 - 1200 proverb
      { Element: ProverbPage_1101_1120, path: "1101-1120" },
      { Element: ProverbPage_1121_1140, path: "1121-1140" },
      { Element: ProverbPage_1141_1160, path: "1141-1160" },
      { Element: ProverbPage_1161_1180, path: "1161-1180" },
      { Element: ProverbPage_1181_1200, path: "1181-1200" },

      // 1201 - 1300 proverb
      { Element: ProverbPage_1201_1220, path: "1201-1220" },
      { Element: ProverbPage_1221_1240, path: "1221-1240" },
      { Element: ProverbPage_1241_1260, path: "1241-1260" },
      { Element: ProverbPage_1261_1280, path: "1261-1280" },
      { Element: ProverbPage_1281_1300, path: "1281-1300" },

      // 1301 - 1400 proverb
      { Element: ProverbPage_1301_1320, path: "1301-1320" },
      { Element: ProverbPage_1321_1340, path: "1321-1340" },
      { Element: ProverbPage_1341_1360, path: "1341-1360" },
      { Element: ProverbPage_1361_1380, path: "1361-1380" },
      { Element: ProverbPage_1381_1400, path: "1381-1400" },
    ],
  };

export default PROVERB_1_500_ROUTES;
