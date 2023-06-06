import Head from "next/head";
import Image from "next/image";
import Headshot from "../public/images/P1002198.JPG";

export default function Home() {
  return (
    <main className="flex flex-col justify-around py-24">
      <Head>
        <title>Brett Austin Eastman</title>
        <meta name="description" content="portfolio" />
      </Head>
      <h3 className="flex justify-around uppercase text-3xl p-8">Home</h3>
      <div className="flex justify-around">
        <Image
          src={Headshot}
          width={700}
          height={700}
          alt="Picture of Brett Austin Eastman"
        />
      </div>
    </main>
  );
}
