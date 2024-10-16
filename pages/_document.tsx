import { Html, Head, Main, NextScript } from 'next/document'
import ExternalCss from './external_css'
import ExternalJs from './external_js'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <ExternalCss />
        <ExternalJs />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}