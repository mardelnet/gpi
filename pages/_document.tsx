import { Html, Head, Main, NextScript } from 'next/document'
import ExternalCss from '../functions/external_css'
import ExternalJs from '../functions/external_js'
import TopNavBar from '../components/top_navbar'
import Footer from '../components/footer'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <ExternalCss />
        <ExternalJs />
        <TopNavBar />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}