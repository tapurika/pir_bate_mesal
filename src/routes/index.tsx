import { Routes, Route } from "react-router";

import Layout from "@/layout";
import AuthPage from "@/pages/auth";
import { PANEL_ROUTES } from "./routes";

export default function AppRoutes() {
  const isAuth = false;

  return isAuth ? <AuthRoute /> : <PanelRoutes />;

  // <Routes>
  //   {/* {isAuth ? <AuthRoute /> : <PanelRoutes />} */}
  //   {/* <Route path="panel/auth" element={<AuthPage />} /> */}
  //   <AuthRoute />
  // </Routes>
}

const AuthRoute = () => (
  <Routes>
    <Route path="panel/auth" element={<AuthPage />} />
  </Routes>
);

function PanelRoutes() {
  return (
    <Routes>
      {PANEL_ROUTES.map(({ subRoute, index, path, Element }) => {
        return (
          <Route path="panel" element={<Layout />}>
            {subRoute ? (
              <Route path={path} element={Element ? <Element /> : undefined}>
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
