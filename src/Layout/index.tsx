import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";

const styles = {
  root: `
     pt-3
  `,
};

// const Layout: React.FC<PageProps & { pageTitle?: string }> = ({
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={styles.root}
      style={{
        direction: "rtl",
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
