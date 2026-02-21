import ProverbPageUI from "@/src/common/ProverbPageUI";

const paths = [
  "2001-2020",
  "2021-2040",
  "2041-2060",
  "2061-2080",
  "2081-2100",
  "2101-2120",
  "2121-2140",
  "2141-2160",
  "2161-2180",
  "2181-2200",
  "2201-2220",
  "2221-2240",
  "2241-2260",
  "2261-2280",
  "2281-2300",
  // "2301-2320",
  // "2321-2340",
  // "2341-2360",
  // "2361-2380",
  // "2381-2400",
  // "2401-2420",
  // "2421-2440",
  // "2441-2460",
  // "2461-2480",
  // "2481-2500",
] as const;

type pathsType = (typeof paths)[number];

export default function Blog({
  posts,
  id,
}: {
  posts: IProverbCard[];
  id: number;
}) {
  // Render posts...r
  return <ProverbPageUI proverbData={posts} count={id} />;
}

// This function gets called at build time
export async function getStaticProps({
  params,
}: {
  params: { id: pathsType };
}) {
  const { id } = params;

  // Call an external API endpoint to get posts
  const res = await import(`../../sources/2001-2500/${id}.json`, {
    assert: { type: "json" },
  });
  const posts = await res.default;

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
      id: Number(id.split("-")[0]),
    },
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  const pagePaths = paths.map((id) => ({ params: { id } }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths: pagePaths, fallback: false };
}
