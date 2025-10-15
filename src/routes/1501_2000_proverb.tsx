import ProverbPage_1001 from "@/pages/1501_2000_Page";

// 1501 - 1600
import ProverbPage_1511_1520 from "@/pages/1501_2000_Page/1501_1600/1501_1520";
import ProverbPage_1521_1540 from "@/pages/1501_2000_Page/1501_1600/1521_1540";
import ProverbPage_1541_1560 from "@/pages/1501_2000_Page/1501_1600/1541_1560";
import ProverbPage_1561_1580 from "@/pages/1501_2000_Page/1501_1600/1561_1580";
import ProverbPage_1581_1600 from "@/pages/1501_2000_Page/1501_1600/1581_1600";

// 1601 - 1700
import ProverbPage_1611_1620 from "@/pages/1501_2000_Page/1601_1700/1601_1620";
import ProverbPage_1621_1640 from "@/pages/1501_2000_Page/1601_1700/1621_1640";
import ProverbPage_1641_1660 from "@/pages/1501_2000_Page/1601_1700/1641_1660";
import ProverbPage_1661_1680 from "@/pages/1501_2000_Page/1601_1700/1661_1680";
import ProverbPage_1681_1700 from "@/pages/1501_2000_Page/1601_1700/1681_1700";

// 1701 - 1800
import ProverbPage_1711_1720 from "@/pages/1501_2000_Page/1701_1800/1701_1720";
import ProverbPage_1721_1740 from "@/pages/1501_2000_Page/1701_1800/1721_1740";
import ProverbPage_1741_1760 from "@/pages/1501_2000_Page/1701_1800/1741_1760";
import ProverbPage_1761_1780 from "@/pages/1501_2000_Page/1701_1800/1761_1780";
import ProverbPage_1781_1800 from "@/pages/1501_2000_Page/1701_1800/1781_1800";

// 1801 - 1900
import ProverbPage_1811_1820 from "@/pages/1501_2000_Page/1801_1900/1801_1820";
import ProverbPage_1821_1840 from "@/pages/1501_2000_Page/1801_1900/1821_1840";
import ProverbPage_1841_1860 from "@/pages/1501_2000_Page/1801_1900/1841_1860";
import ProverbPage_1861_1880 from "@/pages/1501_2000_Page/1801_1900/1861_1880";
import ProverbPage_1881_1900 from "@/pages/1501_2000_Page/1801_1900/1881_1900";

// 1901 - 2000
import ProverbPage_1901_1920 from "@/pages/1501_2000_Page/1901_2000/1901_1920";
import ProverbPage_1921_1940 from "@/pages/1501_2000_Page/1901_2000/1921_1940";
import ProverbPage_1941_1960 from "@/pages/1501_2000_Page/1901_2000/1941_1960";
import ProverbPage_1961_1980 from "@/pages/1501_2000_Page/1901_2000/1961_1980";

const PROVERB_1501_2000_ROUTES =
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

      // 1701 - 1800 proverb
      { Element: ProverbPage_1711_1720, path: "1701-1720" },
      { Element: ProverbPage_1721_1740, path: "1721-1740" },
      { Element: ProverbPage_1741_1760, path: "1741-1760" },
      { Element: ProverbPage_1761_1780, path: "1761-1780" },
      { Element: ProverbPage_1781_1800, path: "1781-1800" },

      // 1801 - 1900 proverb
      { Element: ProverbPage_1811_1820, path: "1801-1820" },
      { Element: ProverbPage_1821_1840, path: "1821-1840" },
      { Element: ProverbPage_1841_1860, path: "1841-1860" },
      { Element: ProverbPage_1861_1880, path: "1861-1880" },
      { Element: ProverbPage_1881_1900, path: "1881-1900" },

      // 1901 - 2000 proverb
      { Element: ProverbPage_1901_1920, path: "1901-1920" },
      { Element: ProverbPage_1921_1940, path: "1921-1940" },
      { Element: ProverbPage_1941_1960, path: "1941-1960" },
      { Element: ProverbPage_1961_1980, path: "1961-1980" },
    ],
  };

export default PROVERB_1501_2000_ROUTES;
