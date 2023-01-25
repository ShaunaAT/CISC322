import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import bitcoin from '../public/bitcoin1.jpg'
import blockchain from '../public/blockchain.jpg'

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
        <h1 className={styles.landingText}>
          CISC 322 - Group 39
        </h1>
        <h2 className={styles.landingText}>Mercy Doan, Sam Lownie, Shauna Tuinstra, Cain Susko, Alice Slabosz, Yash Patel</h2>
        <div>
          <Image
            src={bitcoin}
            alt='Bitcoin'
            fill
            className={styles.landingImage}
            />
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Deliverable</h5>
            <p className="card-text">Deliverable details, introduction, etc.</p>
            <a href="#" className="btn btn-primary">View</a>
          </div>
        </div>
      </main>
    </>
  )
}
