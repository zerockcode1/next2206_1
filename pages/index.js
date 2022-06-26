import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
          <Link href={{pathname:`/posts`}}>POSTS</Link>
      </div>
        <div>
            <Link href={{
                pathname:`/posts/list`,
                query:{page:2, size:10}}}>POSTS LIST</Link>
        </div>

    </div>
  )
}
