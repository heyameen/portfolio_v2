import Image from "next/image";
import styles from "./page.module.css";
import Layout from "../layouts/layout";
import Header from "@/components/header/Header.tsx";
import About from "@/components/about/About";
import Caption from "@/components/caption/Caption";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

import "@/styles/index.scss";

export default function Home() {
  return (
    <Layout>
      <main>
        <Header />
        <About />
        <Caption />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </Layout>
  );
}
