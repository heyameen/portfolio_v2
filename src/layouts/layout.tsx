import Head from "next/head";
import { headers } from "next/headers";
import { Fragment } from "react";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Layout(props: any): FC {
  const { children, ...customMeta } = props;
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");
  const meta = {
    description: `I am passionate about innovation, scalability, performance optimization and excellent user experiences.`,
    image: "https://Ameenalade.dev/meta/ameen.jpg",
    type: "website",
    ...customMeta,
  };
  return (
    <Fragment>
      <Head>
        <title>
          {meta.title
            ? `${meta.title} • Ameen | Creative Software Engineer`
            : "Ameen | Creative Software Engineer"}
        </title>
        <meta name="robots" content="follow, index" />
        <meta
          name="keyword"
          content="Ameen Adedayo Alade, Ameenalade.dev, Ameen, Portfolio, Software Developer, Frontend Engineer, FullStack Developer"
        />
        <meta name="author" content="Ameen - Creative Software Engineer" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://Ameen.dev${activePath}`} />
        <link rel="canonical" href={`https://Ameen.dev${activePath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Ameen" />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:title"
          content={
            meta.title
              ? `${meta.title} • Ameen | Creative Frontend Engineer`
              : "Ameen | Creative Frontend Engineer"
          }
        />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ameen_thegreat" />
        <meta
          name="twitter:title"
          content={
            meta.title
              ? `${meta.title} • Ameen | Creative Frontend Engineer`
              : "Ameen | Creative Frontend Engineer"
          }
        />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="32x32"
          href="/favicon.svg"
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
}
