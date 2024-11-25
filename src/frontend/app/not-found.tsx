import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1>
        <span style={{ fontSize: "4rem" }}>404</span> Not Found
      </h1>
      <p>お探しのページは見つかりませんでした</p>
      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        <Link href="/" style={{ color: "#0969da" }}>
          トップページ
        </Link>
      </p>
    </div>
  );
}
