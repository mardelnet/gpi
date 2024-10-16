import type { AppProps } from 'next/app'

// import '../styles/styles.css'
// import '../styles/bootstrap.css'
// import '../styles/block-library.css'
// import '../styles/gravity-forms.css'

// import '../js/jquery.js'
// import '../js/frontendIndex.js'
// import '../js/index.js'
 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}