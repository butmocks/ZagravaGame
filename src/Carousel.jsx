import { useEffect, useState } from 'react'

import styles from './Carousel.module.css'

const Item = ({ src, active }) => {
  return (
    <img
      src={src}
      alt=''
      className={active ? `${styles.item} ${styles.active}` : styles.item}
    />
  )
}

export const Carousel = ({ items }) => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timerId = setInterval(() => {
      setActive((active + 1) % items.length)
    }, 3000)
    return () => clearInterval(timerId)
  })

  return (
    <div className={styles.carousel}>
      {items.map((src, i) => (
        <Item key={i} src={src} active={active === i} />
      ))}
    </div>
  )
}