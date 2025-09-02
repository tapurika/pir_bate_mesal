import ProverbCard from "@/components/Card/ProverbCard";

const styles = {
  root: `
    wrapper
    flex flex-col gap-20
    mt-10 pt-20 font-iranYekan-600
    border-t-2 border-t-green-600 
  `,
};

export default function ProverbPageUI({
  proverbData,
}: {
  proverbData: IProverbCard[];
}) {
  return (
    <div className={styles.root}>
      {proverbData.map((data) => (
        <ProverbCard {...data} />
      ))}
    </div>
  );
}
