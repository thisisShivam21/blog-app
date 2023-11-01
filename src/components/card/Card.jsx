import Link from 'next/link'
import styles from '../card/card.module.scss'
import Image from 'next/image'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/picture2.jpg" alt='' fill />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>01.11.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
            <h1 className={styles.postTitle}>"Mysteries Unveiled: A Crime Chronicle"</h1>
            </Link>
            <p className={styles.postDesc}>Step into the captivating realm of "Mysteries Unveiled: A Crime Chronicle," where every blog post is a journey into the enigmatic world of crime and investigation. Here, we unravel the stories that often lie hidden behind the headlines, exploring the intricate web of mysteries, motives, and methods that shape the criminal landscape.</p>
            <Link  className={styles.link} href="/">
                Read More
            </Link>
        </div>
    </div>
  )
}

export default Card
