import Link from 'next/link'
import React from 'react'
import styles from './footer.module.scss'

const Footer = (): React.JSX.Element => {
  const Year = new Date().getFullYear()

  return (
    <footer id={styles.footer}>
      <div className={styles.footWrapper}>
        <div className={styles.ulBox}>
          <h3>say hello</h3>

          <ul>
            <li>
              <a href="mailto:aladeameen@gmail.com">hi@ameen.dev</a>
            </li>
            <li>
              <a
                href="https://ameenthegreat.hashnode.dev/"
                target="_blanket"
                rel="noopener"
              >
                blog.ameen.dev
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.ulBox}>
          <ul>
            <li>
              <Link href="#projects">My Works</Link>
            </li>
            <li>
              <a
                href="https://github.com/heyameen"
                target="_blanket"
                rel="noopener"
              >
                Github
              </a>
            </li>
            <li>
              <a href="/files/resume.pdf" target="_blanket" rel="noopener">
                My Résumé
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footBase}>
        <small>&copy; Ameen Alade {Year}</small>

        <ul>
          <li>
            <a
              href="https://twitter.com/ameen_thegreat"
              target="_blanket"
              rel="noopener"
            >
              tw
            </a>
          </li>
          <li>
            <a
              href="https://github.com/heyameen"
              target="_blanket"
              rel="noopener"
            >
              gh
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ameen-alade-7643b5b9/"
              target="_blanket"
              rel="noopener"
            >
              li
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
