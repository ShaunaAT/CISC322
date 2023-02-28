import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import bitcoin from '../public/bitcoin1.jpg'
import NavBar from '../components/nav.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>CISC 322</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <NavBar></NavBar>
        <h1 className={styles.landingText}>
          CISC 322 - YASH
        </h1>
        <h2 className={styles.smallLanding}>Mercy Doan, Sam Lownie, Shauna Tuinstra, Cain Susko, Alice Slabosz, Yash Patel</h2>
        <div>
          <Image
            src={bitcoin}
            alt='Bitcoin'
            fill
            className={styles.landingImage}
            />
        </div>
        
      </main>
    </>
  )
}
