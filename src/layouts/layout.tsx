import { Fragment } from "react";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Layout(props: any): FC {
  const { children, ...customMeta } = props;

  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
}
