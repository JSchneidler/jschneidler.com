import Image from 'next/image'

import styles from './styles.module.css'

export default function Background() {
  return (
    <>
      <div id={styles.backgroundImageOverlay} />
      <Image id={styles.backgroundImage} src='/images/background.jpg' layout='fill' alt='Background' />
    </>
  )
}