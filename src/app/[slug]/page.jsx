import Menu from "@/components/menu/Menu"
import styles from "./singlePage.module.scss"
import Image from "next/image"
import Comments from "@/components/comments/Comments"

const singlePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>"Behind the Yellow Tape: A Crime Investigation Blog"</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/picture1.jpg" alt="blog-image" className={styles.avatar} width={35} height={35} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Shivam Bhardwaj</span>
                            <span className={styles.date}>01.11.2023</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image 
                    src="/picture1.jpg" alt="blog-image" 
                    className={styles.image} width={420}
                    height={350}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>Welcome to "Behind the Yellow Tape," your gateway to the intriguing world of crime investigation. Our blog is your exclusive access to the untold stories, methods, and challenges faced by detectives, forensic experts, and the entire law enforcement community.</p>
                        <h2>"Behind the Yellow Tape: A Crime Investigation Blog"</h2>
                        <p>Welcome to "Behind the Yellow Tape," your gateway to the intriguing world of crime investigation. Our blog is your exclusive access to the untold stories, methods, and challenges faced by detectives, forensic experts, and the entire law enforcement community.</p>
                        <p>Welcome to "Behind the Yellow Tape," your gateway to the intriguing world of crime investigation. Our blog is your exclusive access to the untold stories, methods, and challenges faced by detectives, forensic experts, and the entire law enforcement community.</p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default singlePage
