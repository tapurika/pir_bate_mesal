import { Routes, Route } from "react-router";

import Layout from "@/Layout/index";
// import AuthPage from "@/pages/auth";
import ROUTES from "./routes";

export default function AppRoutes() {
  return (
    <Routes>
      {ROUTES.map(({ subRoute, index, path, Element }) => {
        return (
          <Route element={<Layout />}>
            {subRoute ? (
              <Route
                path={path}
                index={index}
                element={Element ? <Element /> : undefined}
              >
                {subRoute.map((data) => (
                  <Route
                    index={data.index}
                    path={data.path}
                    element={<data.Element />}
                  />
                ))}
              </Route>
            ) : (
              <Route index={index} path={path} element={<Element />} />
            )}
          </Route>
        );
      })}
    </Routes>
  );
}
