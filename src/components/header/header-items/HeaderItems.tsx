import React from 'react'
import styles from './HeaderItems.module.scss'
import { TYPEheaderProps } from '@/type/types'

const HeaderItems = ({children}:TYPEheaderProps) => {
  return (
    <span className={styles.container}>{children}</span>
  )
}

export default HeaderItems