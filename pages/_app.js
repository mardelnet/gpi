import { useEffect } from 'react';

import '../styles/styles.css'
import '../styles/bootstrap.css'
import '../styles/block-library.css'
import '../styles/gravity-forms.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Array of JavaScript file paths
    const scriptFiles = [
      '../js/jquery.js',
      '../js/frontendIndex.js',
      '../js/index.js',
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