"use client"

import React, { useState } from 'react'
import styles from '../authLinks/authLinks.module.scss'
import Link from 'next/link'

const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  // Temporary
  const status = "notAuthenticated"
  return (
    <>
      {status == "notAuthenticated" ? (
        <Link href="/" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/" className={styles.link}>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status == "notAuthenticated" ? (
            <Link href="/">Login</Link>
          ) : (
            <>
              <Link href="/">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks