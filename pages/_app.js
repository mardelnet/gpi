import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/global-styles-inline.css'
import '../styles/custom.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const scriptFiles = [
      '../js/Main.js',
      '../js/FrontEndIndexPlugin.js',
      '../js/FrontEndIndexTheme.js',
      '../js/GalleryScript.js',
      '../js/CarouselHeaderScript.js',
      '../js/ArticlesScript.js',
      '../js/YouTubeLite.js',
      '../js/GravityFormsClientSide.js',
      // '../js/CoverScript.js',
    ];

    scriptFiles.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Greenpeace International</title>
        <link rel="shortcut icon" type="image/ico" href="https://www.greenpeace.org/international/wp-content/themes/planet4-master-theme/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;