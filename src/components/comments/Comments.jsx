import Image from 'next/image'
import styles from './comments.module.scss'
import Link from 'next/link'

const Comments = () => {
    const status = "authenticated"
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder='Write a comment...' className={styles.input} />
                    <button className={styles.button}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment!</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/picture2.jpg" alt='userImage' width={35} height={35} className={styles.image} />
                        <div className={styles.userInfo}>
                            <div className={styles.username}>Shivam Bhardwaj</div>
                            <div className={styles.date}>01.11.2023</div>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Nice blog! Keep it up...
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comments
