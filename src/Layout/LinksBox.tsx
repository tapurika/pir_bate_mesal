import { Popover } from "flowbite-react";
import { Link } from "react-router";

export default function LinksBox({
  text,
  content,
  preLink,
  css,
}: {
  text: string;
  css?: string;
  preLink: string;
  content: string[];
}) {
  return (
    <Popover
      aria-labelledby="default-popover"
      content={
        css ? null : (
          <div className="w-[375px] h-[500px] flex flex-col flex-wrap gap-6 py-6 pt-5 px-5">
            {content.map((text) => (
              <Link key={text} to={preLink + text}>
                مثل- {text}
              </Link>
            ))}
          </div>
        )
      }
    >
      <div className={css ?? "cursor-pointer"}>{text}</div>
    </Popover>
  );
}
