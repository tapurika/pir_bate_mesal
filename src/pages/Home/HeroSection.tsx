import ColorfulButton from "@/components/Button/ColorfulButton";
import React from "react";
import { Link } from "react-router";

const styles = {
  root: `
    flex justify-between
    border

    pt-30
  `,
  rSection: `
    w-3/6
    
  `,
  img: `
    w-96
  `,
  lSection: `
    w-3/6

  `,
};

export default function HeroSection() {
  return (
    <div className={styles.root}>
      <section className={styles.rSection}>
        <img src="/public/images/tabari.jpg" alt="" className={styles.img} />
      </section>
      <section className={styles.lSection}>
        <h1
          className={`
            font-iranYekan-1100
            text-6xl
            leading-24
          `}
        >
          کتاب آنلاین
          <strong className="text-green-600"> پیر بته مثال </strong>
          به زبان تپوری
        </h1>
        <div className="w-11/12">
          <p className="mt-12 font-iranYekan-400 text-[18px]">
            زبانزد به گفتاری کوتاه، رسا و خوش‌آهنگ گفته می‌شود که در بردارنده‌ی
            حکمتی عام، نکتۀ اخلاقی یا نتیجه‌ای تجربی است.
          </p>
          <p className="font-iranYekan-400 text-[18px]">
            ضرب‌المثل‌های تپوری در واقع خلاصۀ فرهنگ، تجربیات و جهان‌بینی یک ملت
            هستند که در قالب جملاتی قصار و به یاد ماندنی از نسلی به نسل دیگر
            منتقل شده‌اند.
          </p>
          <div>
            <p className="mt-9 font-iranYekan-300 text-[17px]">
              این مجموعه زبانزدهای مازندرانی توسط جناب{" "}
              <strong className="text-[16px]"> غلامحسین باقری آلاشتی</strong>{" "}
              گردآوری شده و حاصل یک دهه زحمت ایشان میباشد.
            </p>
            <Link
              to="/writer"
              className="block font-iranYekan-500 mt-5 w-fit text-[16px]"
            >
              <ColorfulButton>
                بیوگرافی نویسنده و کتاب پیر بته مثال
              </ColorfulButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
