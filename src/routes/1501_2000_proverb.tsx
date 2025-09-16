import ProverbPage_1001 from "@/pages/1501_2000_Page";

// 1501 - 1600
import ProverbPage_1511_1520 from "@/pages/1501_2000_Page/1501_1600/1501_1520";
import ProverbPage_1521_1540 from "@/pages/1501_2000_Page/1501_1600/1521_1540";
import ProverbPage_1541_1560 from "@/pages/1501_2000_Page/1501_1600/1541_1560";
import ProverbPage_1561_1580 from "@/pages/1501_2000_Page/1501_1600/1561_1580";
import ProverbPage_1581_1600 from "@/pages/1501_2000_Page/1501_1600/1581_1600";

// 1501 - 1600
// import ProverbPage_1611_1620 from "@/pages/1501_2000_Page/1601_1620/1601_1620";
// import ProverbPage_1621_1640 from "@/pages/1501_2000_Page/1621_1640/1621_1640";
// import ProverbPage_1641_1660 from "@/pages/1501_2000_Page/1641_1660/1641_1660";
// import ProverbPage_1661_1680 from "@/pages/1501_2000_Page/1661_1680/1661_1680";
// import ProverbPage_1681_1700 from "@/pages/1501_2000_Page/1681_1700/1681_1700";

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
      { Element: ProverbPage_1511_1520, path: "1001-1020" },
      { Element: ProverbPage_1521_1540, path: "1021-1040" },
      { Element: ProverbPage_1541_1560, path: "1041-1060" },
      { Element: ProverbPage_1561_1580, path: "1061-1080" },
      { Element: ProverbPage_1581_1600, path: "1081-1100" },
    ],
  };

export default PROVERB_1_500_ROUTES;
