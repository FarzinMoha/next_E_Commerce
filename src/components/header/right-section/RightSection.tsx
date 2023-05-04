import Input from '@/components/input/Input'
import BagIcon from '@/icons/BagIcon'
import HeartIcon from '@/icons/HeartIcon'
import pallet from '@/pallet/pallet'
import React from 'react'
import styles from './RightSection.module.scss'

const RightSection = () => {
  return (
    <div className={styles.rightSection}>
    <Input placeholder="Search" />
    <span className={styles.bagContainer}>
      <HeartIcon width={24} height={24} cursor color={pallet.black} />
    </span>
    <span className={styles.bagContainer}>
      <BagIcon width={26} height={26} cursor color={pallet.black} />
      <span className={styles.text}>22</span>
    </span>
  </div>
  )
}

export default RightSection