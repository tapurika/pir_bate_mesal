import { CgShapeCircle } from "react-icons/cg";

import data from "@/sources/1-100/1-20.json";

type strOrStrArr = string | string[];

interface IProverbCard {
  proverb: strOrStrArr;
  mean: strOrStrArr;
  description: strOrStrArr;
  irony: strOrStrArr;
  reference: {
    writer: string;
    book: string;
  };
  words: {
    w: string;
    m: strOrStrArr;
    d?: strOrStrArr;
  }[];
  p_equal: strOrStrArr;
  subjects: string[];
}

const styles = {
  root: `
    wrapper
    flex flex-col gap-20
    mt-10 pt-20 font-iranYekan-600
    border-t-2 border-t-green-600 
  `,
};

export default function Proverb_1_20() {
  return (
    <div className={styles.root}>
      {data.map((data) => (
        <ProverbCard {...(data as IProverbCard)} />
      ))}
    </div>
  );
}

function TextBox({
  text,
  className = "",
}: {
  text: strOrStrArr;
  className?: string;
}) {
  return (
    <div
      className={
        "flex flex-col gap-2.5 font-iranYekan-400 text-[18px] text-gray-700" +
        className
      }
    >
      {Array.isArray(text) ? (
        text.map((data) => {
          return <span className={"block min-h-2"}>{data}</span>;
        })
      ) : (
        <span className={"block"}>{text}</span>
      )}
    </div>
  );
}

function isExisted(data: strOrStrArr | undefined) {
  const isEmpty = data?.length === 0 || data?.[0].length === 0;

  return !(isEmpty || data === undefined || data === null);
}

function Context({
  title,
  data,
  cls,
}: {
  cls?: {
    title?: string;
    data?: string;
  };
  title: string;
  data: strOrStrArr;
}) {
  return (
    <div>
      <h6 className={cls?.title}>{title} :</h6>
      <TextBox className={cls?.data} text={data} />
    </div>
  );
}

function ProverbCard({
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
      pr-8 py-2.5
      [&>div>h6]:text-[19px]
      [&>div>div]:mt-[2px]
    `}
    >
      <Context
        title="پیر بته مثال"
        data={proverb}
        cls={{
          title: "font-iranYekan-700 text-green-600 !text-[23px]",
          data: "!mt-2 text-[21px]",
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

      {!(typeof words[0] == "string") && (
        <div>
          <h6>واژگان :</h6>
          {words.map((data) => {
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
          {subjects.map((text) => (
            <span>{text}</span>
          ))}
        </div>
      )}
    </section>
  );
}
