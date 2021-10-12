import Head from 'next/head'
import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Course Studio Assessment</title>
        <meta name="Assessment for Course Studio" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default Layout