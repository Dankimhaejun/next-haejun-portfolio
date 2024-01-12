import Hero from '@/components/home/hero'
import Layout from '@/components/layout'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Kim Hae Jun 포트폴리오</title>
        <meta name="description" content="포트폴리오" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  )
}
