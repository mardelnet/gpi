import { Html, Head, Main, NextScript } from 'next/document'
import ExternalCss from '../components/external_css'
import HeaderJs from '../components/HeaderJs'
import FooterJs from '../components/FooterJs'
import TopNavBar from '../components/top_navbar'
import Footer from '../components/footer'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <ExternalCss />
        <HeaderJs />
        <TopNavBar />
      </Head>
      <body>
        <div className='container'>
          <Main />
        </div>
        <NextScript />
        <Footer />
        <FooterJs />
      </body>
    </Html>
  )
}