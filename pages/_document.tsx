import { Html, Head, Main, NextScript } from 'next/document'
import ExternalCss from '../components/ExternalCss'
import HeaderScripts from '../components/HeaderScripts'
import FooterScripts from '../components/FooterScripts'
import TopNavbarHtml from '../components/TopNavbarHtml'
import FooterHtml from '../components/FooterHtml'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <ExternalCss />
        <HeaderScripts />
        <TopNavbarHtml />
      </Head>
      <body>
        <div className='container'>
          <Main />
        </div>
        <NextScript />
        <FooterHtml />
        <FooterScripts />
      </body>
    </Html>
  )
}