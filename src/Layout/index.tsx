import React from "react";
// mx-10

const styles = {
  root: `
    h-screen
    border border-red-600
    pt-12
    max-w-[1280px]
    w-full
    mx-auto
  `,
  header: `
    flex justify-between
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
      <header className={styles.header}>
        <div>
          <span>خانه</span>
          <span>زبانزد 1-100</span>
          <span>زبانزد 1-200</span>
          <span>درباره ی ما</span>
          <span>ارتباط یا ما</span>
        </div>
        <div></div>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
