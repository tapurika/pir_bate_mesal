import { Outlet } from "react-router";

import Header from "./Header";
import Footer from "./Footer";

const styles = {
  root: `
    //border //border-red-600
    pt-3
  `,
};

export default function Layout() {
  return (
    <div
      className={styles.root}
      style={{
        direction: "rtl",
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
