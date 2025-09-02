import { IoHomeOutline } from "react-icons/io5";
import { SiPagekit } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

export const LINKS_1_500 = {
  text: "زبانزد 1-500",
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
  ],
};

export const LINKS = [
  {
    text: "خانه",
    to: "",
    Icon: IoHomeOutline,
  },
  LINKS_1_500,
  {
    text: "501-1000",
    to: "501-1000-proverb/",
    css: "text-gray-400 cursor-context-menu ",
    Icon: SiPagekit,
    toList: [],
  },
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
