/* eslint-disable */
import React from 'react'
import styles from './stack.module.scss'
import ICONS from '@/data/icons'

const Stack: React.FC = () => {
    const iconCount = typeof window !== 'undefined' ? Math.ceil(window.innerWidth / 100) + 1 : 0;
    return (
        <div className={styles.container}>
            <div className={`${styles.blur} ${styles.blurLeft}`} />
            <ul className={styles.list}>
                {[...Array(iconCount)].flatMap(() =>
                    ICONS.map((icon, index) => (
                        <li key={`${index}`} className={styles.item}>
                            <div dangerouslySetInnerHTML={{__html: icon}}/>
                        </li>
                    ))
                )}
            </ul>
            <div className={`${styles.blur} ${styles.blurRight}`}/>
        </div>
    );
};

export default Stack;





// Stack
