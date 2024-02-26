"use client";

import { useEffect } from "react";
import { clarity } from "react-microsoft-clarity";
import { Element } from "react-scroll";
// import Layout from "../layouts/layout";
import Header from "@/components/header/Header";
import About from "@/components/about/About";
import Caption from "@/components/caption/Caption";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import "@/styles/index.scss";
import Stack from "@/components/stack/Stack";

export default function Home() {
  useEffect(() => {
    clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID as string);
  }, []);

  return (
    <div id="navbar">
      <Navbar />
      <main>
        <Header />
        <Stack />
        <Element name="expertise" id="expertise">
          <About />
          <Caption />
        </Element>
        <Element name="about" id="about">
          <Experience />
        </Element>
        <Element name="projects" id="projects">
          <Projects />
        </Element>
        <Element name="contact" id="contact">
          <Contact />
        </Element>
      </main>
      <Footer />
    </div>
  );
}
