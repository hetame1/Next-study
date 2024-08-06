import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <div>
        <h1>Router {slug}</h1>
        <button
          type="button"
          onClick={() =>
            router.push({ pathname: "/[slug]", query: { slug: "push" } })
          }
        >
          PUSH
        </button>
      </div>
      <br />
      <div>
        <h1>Router</h1>
        <button
          type="button"
          onClick={() =>
            router.replace({ pathname: "/[slug]", query: { slug: "push" } })
          }
        >
          REPLACE
        </button>
      </div>
      <br />
      <div>
        <h1>Router</h1>
        <button type="button" onClick={() => router.reload()}>
          RELOAD
        </button>
      </div>
      <br />
      <div>
        <Link href="/hello">헬로</Link>
      </div>
      <br />
      <div>
        <Link href="/bye">바이</Link>
      </div>
    </>
  );
}
