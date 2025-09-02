import ProverbCard from "@/components/Card/ProverbCard";

const styles = {
  root: `
    wrapper
    flex flex-col gap-12 lg:gap-20
    mt-8 pt-20 font-iranYekan-600
    border-t-2 border-t-green-500 
  `,
};

export default function ProverbPageUI({
  proverbData,
}: {
  proverbData: IProverbCard[];
}) {
  return (
    <div className="wrapper-pad">
      <div className={styles.root}>
        {proverbData.map((data) => (
          <ProverbCard
            key={Array.isArray(data.proverb) ? data.proverb[0] : data.proverb}
            {...data}
          />
        ))}
      </div>
    </div>
  );
}
