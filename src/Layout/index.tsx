import React from "react";

import Header from "./Header";

const styles = {
  root: `
    border border-red-600
    pt-3
    max-w-[1280px]
    w-full
    mx-auto
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
      <footer></footer>
    </div>
  );
}
