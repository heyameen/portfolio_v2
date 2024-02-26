import React from "react";
import Image from "next/image";
import styles from "./progress.module.scss";
import { expertise } from "@/data/expertise";

const ProgressIndicator = (): React.JSX.Element => {
  return (
    <div className={styles.container}>
      {expertise.map((data, index) => {
        const isLast = index === expertise.length - 1;
        return (
          <div className={styles.steps} key={data.ellipse}>
            <div
              className={`${styles.circle} ${isLast ? styles.lastCircle : ""}`}
            >
              {data.step}
            </div>
            <div className={styles.progress}>
              <div>
                <Image
                  src={data.ellipse}
                  alt="ellipse"
                  width={56}
                  height={56}
                />
                <h3 className={styles.header}>{data.headerText}</h3>
                <p className={styles.body}>{data.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressIndicator;
