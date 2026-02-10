import ProverbPageUI from "@/src/common/ProverbPageUI";

const paths = [
  "501-520",
  "521-540",
  "541-560",
  "561-580",
  "581-600",
  "601-620",
  "621-640",
  "641-660",
  "661-680",
  "681-700",
  "701-720",
  "721-740",
  "741-760",
  "761-780",
  "781-800",
  "801-820",
  "821-840",
  "841-860",
  "861-880",
  "881-900",
  "901-920",
  "921-940",
  "941-960",
  "961-980",
  "981-1000",
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
  const res = await import(`../../sources/501-1000/${id}.json`, {
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
