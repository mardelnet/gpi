import { useEffect } from 'react';

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

  return <Component {...pageProps} />;
}

export default MyApp;