import React from 'react'
import { Icon, Flex } from 'antd-mobile'

import styles from './Loading.module.scss'

export default function Loading() {
  return (
    <Flex align="center" className={styles.container} justify="center">
      <Icon size="lg" type="loading" />
    </Flex>
  )
}
