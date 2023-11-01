import React from 'react'
import Link from 'next/link'
import styles from '../categorylist/categorylist.module.scss'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Popular Categories</h1>
        <div className={styles.categories}>
            <Link href="/blog?cat=style" className={`${styles.category} ${styles.Style}`}>
              <Image 
              src="/youtube.png" 
              alt=""
              width={22}
              height={22} 
              className={styles.image}
              />
              Style
            </Link>
            <Link href="/blog?cat=style" className={`${styles.category} ${styles.Fashion}`}>
              <Image 
              src="/youtube.png" 
              alt=""
              width={22}
              height={22} 
              className={styles.image}
              />
              Fashion
            </Link>
            <Link href="/blog?cat=style" className={`${styles.category} ${styles.Food}`}>
              <Image 
              src="/youtube.png" 
              alt=""
              width={22}
              height={22} 
              className={styles.image}
              />
              Food
            </Link>
            <Link href="/blog?cat=style" className={`${styles.category} ${styles.Travel}`}>
              <Image 
              src="/youtube.png" 
              alt=""
              width={22}
              height={22} 
              className={styles.image}
              />
              Travel
            </Link>
            <Link href="/blog?cat=style" className={`${styles.category} ${styles.Culture}`}>
              <Image 
              src="/youtube.png" 
              alt=""
              width={22}
              height={22} 
              className={styles.image}
              />
              Culture
            </Link>
            <Link href="/blog?cat=style" className={`${styles.category} ${styles.Coding}`}>
              <Image 
              src="/youtube.png" 
              alt=""
              width={22}
              height={22}  
              className={styles.image}
              />
              Coding
            </Link>
        </div>
    </div>
  )
}

export default CategoryList
