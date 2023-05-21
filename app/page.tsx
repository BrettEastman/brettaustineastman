import Head from 'next/head';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <Head>
        <title>Brett Austin Eastman</title>
        <meta name="description" content="portfolio"/>
      </Head>
      <Header />
      <Navbar />
    </main>
  )
}
