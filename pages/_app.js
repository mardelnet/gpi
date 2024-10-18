import { useEffect } from 'react';

import '../styles/global-styles-inline.css'
import '../styles/custom.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Array of JavaScript file paths
    const scriptFiles = [
      '../js/jquery.js',
      '../js/frontendIndex.js',
      // '../js/index.js',
      '../js/CarouselHeaderScript.js',
    ];

    // Dynamically load each script on the client side
    scriptFiles.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);

      // Optional: Clean up by removing the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    });
  }, []); // Empty dependency array to ensure this only runs once on the client side

  return <Component {...pageProps} />;
}

export default MyApp;

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }