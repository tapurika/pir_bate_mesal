import { isExisted } from "@/utils";
import Context from "@/components/Text/Context";
import TextBox from "@/components/Text/TextBox";

export default function ProverbCard({
  proverb,
  mean,
  irony,
  description,
  p_equal,
  words,
  reference,
  subjects,
}: IProverbCard) {
  return (
    <section
      className={`
      flex flex-col gap-6
      border-r-4 border-r-green-500
      pr-8 pl-6 py-8
      [&>div>h6]:text-[19px]
      [&>div>div]:mt-[5px]
      shadow-lg inset-shadow-xs rounded-2xl
    `}
    >
      <Context
        title="پیر بته مثال"
        data={proverb}
        cls={{
          title: " font-iranYekan-700 text-green-600 !text-[23px] ",
          data: " !mt-2.5 text-[21px] text-shadow-sm ",
        }}
      />
      {isExisted(mean) ? <Context title="معنی" data={mean} /> : null}
      {isExisted(irony) ? <Context title="کنایه از" data={irony} /> : null}
      {isExisted(description) ? (
        <Context title="توضیجات بیشتر" data={description} />
      ) : null}
      {isExisted(p_equal) ? (
        <Context title="برابر پارسی" data={p_equal} />
      ) : null}

      {typeof words[0] == "object" && (
        <div>
          <h6>واژگان :</h6>
          {(words as IWord[]).map((data) => {
            return (
              <div key={data.w} className="text-gray-500">
                <div>
                  <strong>
                    {data.w} {`-->`}{" "}
                  </strong>
                  <TextBox text={data.m} />
                  {isExisted(data.d) && <TextBox text={data.d!} />}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {isExisted(reference.writer) || isExisted(reference.book) ? (
        <div>
          {isExisted(reference.writer) && (
            <div>
              <strong className="pe-1.5">نویسنده : </strong>
              <span> {reference.writer}</span>
            </div>
          )}
          {isExisted(reference.book) && (
            <div>
              <strong className="pe-1.5">کتاب : </strong>
              <span> {reference.book}</span>
            </div>
          )}
        </div>
      ) : null}

      {isExisted(subjects) && (
        <div className="">
          <h6>موضوع :</h6>
          <div className="flex items-center gap-5">
            {subjects.map((text) => (
              <span
                key={"12" + text}
                className="block font-iranYekan-400 text-[19px] text-gray-700"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
