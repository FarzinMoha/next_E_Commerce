import { TYPEnavbarItem } from '@/type/types'
import styles from './NavbarItem.module.scss' 
import React from 'react'

const NavbarItem = ({children , rightLine}:TYPEnavbarItem) => {
  return (
    <span className={styles.item}>
        <span className={styles.text}>{children}</span>
        {rightLine && <span className={styles.line}>|</span>}
        
    </span>
  )
}

export default NavbarItem