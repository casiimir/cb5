import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Confetti from "react-confetti";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [confettiPieces, setConfettiPieces] = useState(50);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.confetti}>
          <Confetti
            width={400}
            height={250}
            numberOfPieces={confettiPieces}
            // wind={1}
            // gravity={1}
            // colors={["red", "green", "blue"]}
          />
        </div>
        <label htmlFor="confetti-pieces">Confetti Pieces</label>
        <input
          type="range"
          name="confetti-pieces"
          id="confetti-pieces"
          onInput={(e) => setConfettiPieces(e.target.value) * 2.5}
        />
      </main>
    </>
  );
}