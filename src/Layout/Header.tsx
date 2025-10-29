import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { LINKS } from "./constant";
import LinksBox from "./LinksBox";
import { MenuDrawer } from "./MenuDrawer";

const styles = {
  header: `
    flex justify-between items-center
    font-iranYekan-600
  `,
  linkBox: `
    hidden 
    lg:flex items-center gap-10 
  `,
  logBox: `
    flex items-center gap-4
  `,
};

export default function Header() {
  return (
    <header className={" wrapper-pad"}>
      <div className={styles.header + " wrapper"}>
        <div className={styles.linkBox}>
          {LINKS.map((data) => {
            return data.toList ? (
              <LinksBox
                key={data.to}
                text={data.text}
                preLink={data.to}
                content={data.toList}
                css={data?.css}
              />
            ) : (
              <Link key={data.to} to={"/" + data.to}>
                {data.text}
              </Link>
            );
          })}
        </div>
        <MenuDrawer />
        <div className={styles.logBox}>
          <span className="font-iranYekan-800 text-[20px]">پیر بته مثال</span>
          <StaticImage
            src="../images/oldman-header.png"
            alt="پیر بته مثال"
            style={{
              width: 75,
              height: 75,
            }}
          />
        </div>{" "}
      </div>
    </header>
  );
}
