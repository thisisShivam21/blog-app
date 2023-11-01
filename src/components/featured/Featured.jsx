import React from 'react'
import Image from 'next/image'
import styles from '../featured/featured.module.scss'

const Featured = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}><b> "Justice Unearthed: </b>Tales from the Crime Files"</h1>
        <div className={styles.post}>
          <div className={styles.imageContainer}>
            <Image src="/picture1.jpg" alt="homePicture-1" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>"Behind the Yellow Tape: A Crime Investigation Blog"</h1>
            <p className={styles.postDesc}>
              Welcome to "Behind the Yellow Tape," your gateway to the intriguing world of crime investigation. Our blog is your exclusive access to the untold stories, methods, and challenges faced by detectives, forensic experts, and the entire law enforcement community.
            </p>
            <button className={styles.postButton}>Read More!</button>
          </div>
        </div>
    </div>
  )
}

export default Featured
