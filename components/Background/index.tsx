// import Image from 'next/image'

import styles from './styles.module.css'

export default function Background() {
  return (
    <>
      <div id={styles.backgroundImageOverlay} />
      <img id={styles.backgroundImage} src='/images/background.jpg' alt='Background' />
      {/*<Image id={styles.backgroundImage} src='/images/background.jpg' layout='fill' alt='Background' />*/}
    </>
  )
}