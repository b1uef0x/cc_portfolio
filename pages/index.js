
import Head from 'next/head'
import About from "../components/About";

export default function Home() {
  // Taking care of the browser-specific prefixes.
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Chiara Corey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About/>
      </main>
    </div>
  )
}
