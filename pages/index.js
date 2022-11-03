import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Baseball Pals</title>
        <link rel="icon" href="/cutty-small.png" />
      </Head>

      <main className="flex w-full flex-1 flex-col px-20">
        <h1 className='flex text-white align-top justify-center text-5xl z-99'>UNDER CONSTRUCTION</h1>
        <div className='flex -z-50'><Image src='/cottoncandy.gif' layout='fill' /></div>
      </main>
    </div>
  )
}
