/// <reference types="vite/client" />

declare type strOrStrArr = string | string[];

declare module "path";

declare interface IProverbCard {
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
