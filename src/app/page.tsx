"use client";

import { useEffect } from "react";
import { clarity } from "react-microsoft-clarity";
import Layout from "../layouts/layout";
import Header from "@/components/header/Header";
import About from "@/components/about/About";
import Caption from "@/components/caption/Caption";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

import "@/styles/index.scss";

export default function Home() {
  useEffect(() => {
    clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID as string);
  }, []);

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
