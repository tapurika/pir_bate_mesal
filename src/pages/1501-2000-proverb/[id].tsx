import ProverbPageUI from "@/src/common/ProverbPageUI";

const paths = [
  "1501-1520",
  "1521-1540",
  "1541-1560",
  "1561-1580",
  "1581-1600",
  "1601-1620",
  "1621-1640",
  "1641-1660",
  "1661-1680",
  "1681-1700",
  "1701-1720",
  "1721-1740",
  "1741-1760",
  "1761-1780",
  "1781-1800",
  "1801-1820",
  "1821-1840",
  "1841-1860",
  "1861-1880",
  "1881-1900",
  "1901-1920",
  "1921-1940",
  "1941-1960",
  "1961-1980",
  "1981-2000",
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
  const res = await import(`../../sources/1501-2000/${id}.json`, {
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
