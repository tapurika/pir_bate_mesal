import ProverbPage_1001 from "@/pages/1501_2000_Page";

// 1501 - 1600
import ProverbPage_1511_1520 from "@/pages/1501_2000_Page/1501_1600/1501_1520";
import ProverbPage_1521_1540 from "@/pages/1501_2000_Page/1501_1600/1521_1540";
import ProverbPage_1541_1560 from "@/pages/1501_2000_Page/1501_1600/1541_1560";
import ProverbPage_1561_1580 from "@/pages/1501_2000_Page/1501_1600/1561_1580";
import ProverbPage_1581_1600 from "@/pages/1501_2000_Page/1501_1600/1581_1600";

// 1501 - 1600
import ProverbPage_1611_1620 from "@/pages/1501_2000_Page/1601_1700/1601_1620";
import ProverbPage_1621_1640 from "@/pages/1501_2000_Page/1601_1700/1621_1640";
import ProverbPage_1641_1660 from "@/pages/1501_2000_Page/1601_1700/1641_1660";
import ProverbPage_1661_1680 from "@/pages/1501_2000_Page/1601_1700/1661_1680";
import ProverbPage_1681_1700 from "@/pages/1501_2000_Page/1601_1700/1681_1700";

const PROVERB_1_500_ROUTES =
  // introduction 1-500
  {
    path: "1501-2000-proverb",
    subRoute: [
      // introduction 1001 - 1500 proverb
      {
        index: true,
        Element: ProverbPage_1001,
        path: "",
      },

      // 1501 - 1600 proverb
      { Element: ProverbPage_1511_1520, path: "1501-1520" },
      { Element: ProverbPage_1521_1540, path: "1521-1540" },
      { Element: ProverbPage_1541_1560, path: "1541-1560" },
      { Element: ProverbPage_1561_1580, path: "1561-1580" },
      { Element: ProverbPage_1581_1600, path: "1581-1600" },

      // 1601 - 1700 proverb
      { Element: ProverbPage_1611_1620, path: "1601-1620" },
      { Element: ProverbPage_1621_1640, path: "1621-1640" },
      { Element: ProverbPage_1641_1660, path: "1641-1660" },
      { Element: ProverbPage_1661_1680, path: "1661-1680" },
      { Element: ProverbPage_1681_1700, path: "1681-1700" },
    ],
  };

export default PROVERB_1_500_ROUTES;
