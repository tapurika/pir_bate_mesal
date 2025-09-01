import HomePage from "@/pages/Home";

const PROVERB_1_500_ROUTES =
  // introduction 1-500
  {
    Element: HomePage,
    path: "1-500-proverb",
    subRoute: [
      {
        index: true,
        Element: HomePage,
        path: "1-20",
      },
      {
        index: true,
        Element: HomePage,
        path: "21-40",
      },
      {
        index: true,
        Element: HomePage,
        path: "41-60",
      },
      {
        index: true,
        Element: HomePage,
        path: "61-80",
      },
      {
        index: true,
        Element: HomePage,
        path: "81-100",
      },
    ],
  };

export default PROVERB_1_500_ROUTES;
