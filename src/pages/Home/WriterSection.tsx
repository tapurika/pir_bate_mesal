const styles = {
  root: `
    w-4/5
    flex justify-between items-center
    mx-auto

    mt-32
  `,
  text: `
    font-iranYekan-400 text-[20px]
    pl-5
  `,
};

export default function WriterSection() {
  return (
    <div>
      <div className={styles.root + " wrapper"}>
        <div className={styles.text}>
          <h3 className="block text-2xl font-bold">
            {" "}
            مختصری از گرداورنده ی کتاب:
          </h3>
          <span className="block mt-5">
            گردآوری این زبانزد های تبری ( ضرب المثل های مازندرانی) حاصل هشت سال
            تلاش اینجانب غلامحسین باقِری الاشتی میباشد.
          </span>
          <p>
            بنده گفته های پدر عزیزم را یادداشت کردم و بعضی از این ضرب المثل ها
            نیز در تحقیقات میدانی به اقصی نقاط مازندران زیبا داشتم از فرمایشات
            بزرگان یادداشت کردم.
          </p>
        </div>
        <div className="overflow-hidden rounded-full relative w-[250px] min-w-[250px] h-[250px]">
          <img
            // className="w-2xs"
            className="absolute top-[-70px] left-0"
            src="/images/writer-1.jpg"
            alt="غلام حسین باقری آلاشتی سوادکوهی"
          />
        </div>
      </div>
    </div>
  );
}
