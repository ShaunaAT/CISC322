import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import bitcoin from '../public/bitcoin.avif'

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
          CISC 322 Group 39
        </h1>
        <div>
          <Image
            src={bitcoin}
            alt='Bitcoin'
            fill
            className={styles.landingImage}
            />
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Deliverable</h5>
                <p className="card-text">Deliverable deets</p>
                <a href="#" className="btn btn-primary">View</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Deliverable</h5>
                <p className="card-text">Deliverable deets</p>
                <a href="#" className="btn btn-primary">View</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
