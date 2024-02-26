import React from "react";
import Image from "next/image";
import styles from "./title.module.scss";

interface titleProps {
  title: string;
}

const SectionTitle = ({ title }: titleProps): React.JSX.Element => {
  return (
    <div className={styles.sectionTitle}>
      <h1 style={{ marginRight: "29px" }}>{title}</h1>
      <Image src="/icons/about_star.svg" width={31} height={31} alt="star" />
    </div>
  );
};

export default SectionTitle;
