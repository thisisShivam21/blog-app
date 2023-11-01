import styles from "../menuPosts/menuPosts.module.scss"
import Link from "next/link"
import Image from "next/image"

const MenuPosts = ({ withImage }) => {
    return (
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src="/picture1.jpg" alt='' fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                    <h3 className={styles.postTitle}>True Crime Stories</h3>
                    <div className={styles.details}>
                        <span className={styles.username}>Shivam Bhardwaj</span>
                        <span className={styles.date}> - 01.11.2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src="/picture1.jpg" alt='' fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                    <h3 className={styles.postTitle}>True Crime Stories</h3>
                    <div className={styles.details}>
                        <span className={styles.username}>Shivam Bhardwaj</span>
                        <span className={styles.date}> - 01.11.2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src="/picture1.jpg" alt='' fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.food}`}>Food</span>
                    <h3 className={styles.postTitle}>True Crime Stories</h3>
                    <div className={styles.details}>
                        <span className={styles.username}>Shivam Bhardwaj</span>
                        <span className={styles.date}> - 01.11.2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src="/picture1.jpg" alt='' fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                    <h3 className={styles.postTitle}>True Crime Stories</h3>
                    <div className={styles.details}>
                        <span className={styles.username}>Shivam Bhardwaj</span>
                        <span className={styles.date}> - 01.11.2023</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MenuPosts
