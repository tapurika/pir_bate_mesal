import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const styles = {
  root: `
    border border-red-600
    pt-3
    
  `,
};

export default function Layout({ children }: { children: React.ReactNode }) {
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
}
