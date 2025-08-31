import { Link } from "react-router";

const styles = {
  header: `
    flex justify-between items-center
    border border-red-500
    font-iranYekan-600
  `,
  linkBox: `
    flex gap-10
  `,
  logBox: `
    flex items-center gap-4
    border
  `,
};

const LINKS = [
  {
    text: "خانه",
    to: "",
  },
  {
    text: "زبانزد 1-100",
    to: "1-100",
  },
  {
    text: "زبانزد 1-200",
    to: "101-200",
  },
  {
    text: "نویسنده",
    to: "writer",
  },
  {
    text: "درباره ی ما",
    to: "about-us",
  },
  {
    text: "ارتباط با ما",
    to: "contact-us",
  },
  // {
  //   text: "",
  //   to: "",
  // },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.linkBox}>
        {LINKS.map((data) => {
          return (
            <Link key={data.to} to={"/" + data.to}>
              {data.text}
            </Link>
          );
        })}
      </div>
      <div className={styles.logBox}>
        <span className="font-iranYekan-800 text-[20px]">پیر بته مثال</span>
        <img
          src="/public/images/oldman-header.png"
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
