import ProverbPageUI from "@/src/common/ProverbPageUI";

const paths = [
  "1001-1020",
  "1021-1040",
  "1041-1060",
  "1061-1080",
  "1081-1100",
  "1101-1120",
  "1121-1140",
  "1141-1160",
  "1161-1180",
  "1181-1200",
  "1201-1220",
  "1221-1240",
  "1241-1260",
  "1261-1280",
  "1281-1300",
  "1301-1320",
  "1321-1340",
  "1341-1360",
  "1361-1380",
  "1381-1400",
  "1401-1420",
  "1421-1440",
  "1441-1460",
  "1461-1480",
  "1481-1500",
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
  const res = await import(`../../sources/1001-1500/${id}.json`, {
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
