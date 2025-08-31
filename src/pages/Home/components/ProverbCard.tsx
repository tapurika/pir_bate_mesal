const styles = {
  root: `
    flex flex-col justify-between
    max-w-sm w-sm p-6
    bg-white
    border border-gray-200
    rounded-lg
    shadow-sm
    dark:bg-gray-800 dark:border-gray-700
  `,
};

export default function ProverbCard({
  proverb,
  mean,
  irony,
}: {
  proverb: string;
  mean: string;
  irony: string;
}) {
  return (
    <div className={styles.root}>
      <div>
        <div>
          <h5 className="font-iranYekan-600 mb-2 text-[22px] tracking-tight text-gray-900 dark:text-white">
            {proverb}
          </h5>
        </div>
        <p className="font-iranYekan-400 mb-3 font-normal text-gray-700 dark:text-gray-400">
          معنی: {mean}
        </p>
        <p className="font-iranYekan-400 mb-3 font-normal text-gray-700 dark:text-gray-400">
          {irony}
        </p>
      </div>
      <div className="mt-4">
        <a className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-700">
          بیشتر بخوانید
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
