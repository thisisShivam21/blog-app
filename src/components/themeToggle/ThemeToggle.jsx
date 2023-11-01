"use client"

import React, { useContext } from 'react'
import styles from '../themeToggle/themeToggle.module.scss'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {

  const { theme, toggle } = useContext(ThemeContext)

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark" ? { backgrounColor: "white" } : { backgroundColor: "#0f172a" }
      }
    >
      <img src="/moon.png" alt="moon" width={10} height={10} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <img src="/sun.png" alt="sun" width={10} height={10} />
    </div>
  )
}

export default ThemeToggle