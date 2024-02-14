import Link from "next/link";

import Layout from "@/layouts/notFound";
import "@/styles/index.scss";

export default function NotFound() {
  return (
    <Layout title="404">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "300px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>
          404! – This Page Isn&apos;t Here
        </h1>
        <p style={{ maxWidth: "320px", textAlign: "center" }}>
          Looks like we have a 404 problem, which means you&apos;ve clicked on
          bad link or entered an invalid URL. Maybe what you&apos;re looking for
          can be found at{" "}
          <Link href="/" style={{ color: "$linearGrey" }}>
            Ameenalade.dev
          </Link>
        </p>
      </div>
    </Layout>
  );
}
