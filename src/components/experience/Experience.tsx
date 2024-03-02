import React from 'react'
import Image from 'next/image'
import styles from './experience.module.scss'
import SectionTitle from '@/components/SectionTitle/SectionTitle'

const Experience = (): React.JSX.Element => {
  return (
    <section className={styles.experience} id="about">
      {/* <div className={styles.section}> */}
      {/* <SectionTitle title="Experience" /> */}
      {/* </div> */}
      <div className={styles.container}>
        <div className={styles.expWrapper}>
          <div className={styles.image}>
            <Image
              src="/dp.jpeg"
              alt="profile image"
              // width={584}
              // height={518}
              fill
              style={{
                objectFit: 'cover',
              }}
              quality={100}
            />
          </div>
          <article className={styles.expText}>
            <h1> Hello! I'm Ameen 👋🏼</h1>
            <p>
              My journey began at Starlabel, where I embraced the foundational
              rigors of web development, ensuring optimal website performance
              and functionality.
            </p>
            <p>
              At Venture Garden Group, I enhanced a cross-border payment
              solution, bolstering user engagement. My initiatives in
              multi-language accessibility widened our user base, while rapid
              development of critical components streamlined our processes.
            </p>
            <p>
              With Bellhop Inc., I championed strategies, from A/B testing that
              boosted lead generation to a comprehensive website redesign,
              elevating user experience.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
