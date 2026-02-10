import Link from "next/link";
import { CiLink } from "react-icons/ci";

import { LINKS_1001_1500 } from "../../Layout/constant";

const styles = {
  root: `
    mt-10 pt-14 font-iranYekan-600
    border-t-2 border-t-green-600
   `,
  title: `
    text-3xl text-gray-600
  `,
  textBox: `
    flex flex-col gap-3 mt-9
    text-[20px]
  `,
};

export default function ProverbPage_3() {
  return (
    <div className={styles.root + " wrapper "}>
      <h3 className={styles.title}>
        فهرست زبانزد های
        <strong className="text-green-500 font-extrabold">
          {" "}
          تپوری (طبری - مازندرانی){" "}
        </strong>
        از 1001 تا 1500{" "}
      </h3>
      <div className={styles.textBox}>
        {LINKS_1001_1500.toList.map((to) => {
          return (
            <Link
              className="flex items-center gap-3"
              key={to}
              href={"/" + LINKS_1001_1500.to + to}
            >
              <CiLink />
              <span>{to}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
