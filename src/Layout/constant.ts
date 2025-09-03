import { IoHomeOutline } from "react-icons/io5";
import { SiPagekit } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

interface ILinks {
  text: string;
  to: string;
  Icon: React.FC;
  css?: string;
  toList?: string[];
}

export const LINKS_1_500 = {
  text: "1-500",
  to: "1-500-proverb/",
  Icon: SiPagekit,
  toList: [
    "1-20",
    "21-40",
    "41-60",
    "61-80",
    "81-100",

    "101-120",
    "121-140",
    "141-160",
    "161-180",
    "181-200",

    "201-220",
    "221-240",
    "241-260",
    "261-280",
    "281-300",

    "301-320",
    "321-340",
    "341-360",
    "361-380",
    "381-400",

    "401-420",
    "421-440",
    "441-460",
    "461-480",
    "481-500",
  ],
};

export const LINKS_501_1000 = {
  text: "501-1000",
  to: "501-1000-proverb/",
  Icon: SiPagekit,
  toList: [
    "501-520",
    "521-540",
    "541-560",
    "561-580",
    "581-600",

    "601-620",
    "621-640",
    "641-660",
    "661-680",
    "681-700",

    "701-720",
    "721-740",
    "741-760",
    "761-780",
    "781-800",

    "801-820",
    "821-840",
    "841-860",
    "861-880",
    "881-900",

    "901-920",
    "921-940",
    "941-960",
    "961-980",
    "981-1000",
  ],
};

export const LINKS: ILinks[] = [
  {
    text: "خانه",
    to: "",
    Icon: IoHomeOutline,
  },
  LINKS_1_500,
  LINKS_501_1000,
  {
    text: "1001-1500",
    to: "1001-1500-proverb/",
    css: "text-gray-400 cursor-context-menu ",
    Icon: SiPagekit,
    toList: [],
  },
  {
    text: "1501-2000",
    to: "1501-2000-proverb/",
    css: "text-gray-400 cursor-context-menu ",
    Icon: SiPagekit,
    toList: [],
  },
  {
    text: "نویسنده",
    to: "writer",
    Icon: TfiWrite,
  },
  {
    text: "درباره ی ما",
    to: "about-us",
    Icon: FaUser,
  },
  {
    text: "ارتباط با ما",
    to: "contact-us",
    Icon: IoShareSocialOutline,
  },
];
