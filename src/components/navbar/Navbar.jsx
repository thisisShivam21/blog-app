import React from 'react'
import styles from '../navbar/navbar.module.scss'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className='styles.social'>
            <img src="/facebook.png" alt="facebook" width={24} height={24} />
            <img src="/instagram.png" alt="instagram" width={24} height={24} />
            <img src="/tiktok.png" alt="tiktok" width={24} height={24} />
            <img src="/youtube.png" alt="youtube" width={24} height={24} />
        </div>
        <div className='styles.logo'>detective'sHome</div>
        <div className='styles.links'>
            <Link href="/">Homepage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">About</Link>
        </div>
    </div>
  )
}

export default Navbar
