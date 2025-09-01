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
          <div className="w-72 h-[350px] flex flex-col gap-2 py-6 pt-5 px-5">
            {content.map((text) => (
              <Link key={text} to={preLink + text}>
                مثل-{text}
              </Link>
            ))}
          </div>
        )
        //   <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
        //     <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        //       <h3
        //         id="default-popover"
        //         className="font-semibold text-gray-900 dark:text-white"
        //       >
        //         Popover title
        //       </h3>
        //     </div>
        //     <div className="px-3 py-2">
        //       <p>And here's some amazing content. It's very engaging. Right?</p>
        //     </div>
        //   </div>
      }
    >
      <div className={css ?? "cursor-pointer"}>{text}</div>
    </Popover>
  );
}

// function LinksBox({ links }: { links: string }) {
//   return <></>;
// }
