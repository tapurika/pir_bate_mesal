import ProverbCard from "./components/ProverbCard";
import { PROVERB } from "./constants";

const styles = {
  root: `
    flex flex-col gap-11
    mt-32
  `,
  cardWrapper: `
    
    flex justify-evenly flex-wrap
    gap-7
  `,
};

export default function ProverbSection() {
  return (
    <div className={styles.root + " wrapper"}>
      <h2 className="font-iranYekan-500 text-3xl">
        چند نمونه از
        <strong className="text-green-600"> پیر بته مثال های </strong>
        تپوری (مازندرانی)
      </h2>
      <div className={styles.cardWrapper}>
        {PROVERB.map(({ irony, mean, proverb }) => (
          <ProverbCard
            key={proverb}
            proverb={proverb}
            irony={irony}
            mean={mean}
          />
        ))}
      </div>
    </div>
  );
}
