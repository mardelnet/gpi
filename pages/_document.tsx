import { Html, Head, Main, NextScript } from 'next/document'
import ExternalCss from './external_css.js'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <ExternalCss />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}