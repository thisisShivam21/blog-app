import React from 'react'
import styles from '../navbar/navbar.module.scss'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
            <img src="/facebook.png" alt="facebook" width={20} height={20} />
            <img src="/instagram.png" alt="instagram" width={20} height={20} />
            <img src="/tiktok.png" alt="tiktok" width={20} height={20} />
            <img src="/youtube.png" alt="youtube" width={20} height={20} />
        </div>
        <div className={styles.logo}>detective'sHome</div>
        <div className={styles.links}>
            <ThemeToggle />
            <Link href="/" className={styles.link}>Homepage</Link>
            <Link href="/" className={styles.link}>Contact</Link>
            <Link href="/" className={styles.link}>About</Link>
            <AuthLinks />
        </div>
    </div>
  )
}

export default Navbar
