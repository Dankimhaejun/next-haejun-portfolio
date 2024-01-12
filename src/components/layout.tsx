import Head from 'next/head'
import Footer from './footer'
import Header from './header'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Kim Hae Jun 포트폴리오</title>
        <meta name="description" content="포트폴리오" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}
