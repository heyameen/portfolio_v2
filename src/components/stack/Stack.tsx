/* eslint-disable */
import React from 'react'
import styles from './stack.module.scss'
import ICONS from '@/data/icons'

const BLURS = 3

const Stack = (): React.JSX.Element => {
  return (
    <div
      className={styles.resizable}
      data-translate="items"
      data-direction="horizontal"
      data-blurring={true}
      data-outline={false}
      data-play-state="running"
      data-spill={false}
      style={{
        '--speed': 25,
        '--count': 12,
        '--scale': 1,
        '--blur': 1.8,
        '--blurs': BLURS,
      }}
    >
      <div className={styles.container}>
        <div className={`${styles.blur} ${styles.blurLeft}`}>
          {new Array(BLURS).fill(0).map((_, index) => (
            <div key={index} style={{ '--index': index }} />
          ))}
        </div>
        <ul className={styles.ul}>
          {new Array(12).fill(0).map((item, index) => {
            return (
              <li
                className={styles.li}
                key={`index-${Date.now()}--${index}`}
                style={{ '--index': index }}
                dangerouslySetInnerHTML={{
                  __html: ICONS[index % ICONS.length],
                }}
              />
            )
          })}
        </ul>
        <div className={`${styles.blur} ${styles.blurRight}`}>
          {new Array(BLURS).fill(0).map((_, index) => (
            <div
              key={index}
              style={{
                '--index': index + 1,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stack
