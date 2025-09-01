import { Link } from "react-router";
import { LINKS } from "./constant";
import LinksBox from "./LinksBox";

const styles = {
  header: `
    flex justify-between items-center
    //border //border-red-500
    font-iranYekan-600
  `,
  linkBox: `
    flex items-center gap-10 
  `,
  logBox: `
    flex items-center gap-4
    //border
  `,
};

export default function Header() {
  return (
    <header className={styles.header + " wrapper"}>
      <div className={styles.linkBox}>
        {LINKS.map((data) => {
          return data.toList ? (
            <LinksBox
              key={data.to}
              text={"زبانزد " + data.text}
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
      <div className={styles.logBox}>
        <span className="font-iranYekan-800 text-[20px]">پیر بته مثال</span>
        <img
          src="/images/oldman-header.png"
          alt="پیربته مثال"
          style={{
            width: 75,
            height: 75,
          }}
        />
      </div>
    </header>
  );
}
