import { useEffect, useState } from 'react';

const BASE_URL = "https://www.greenpeace.org/international";
const WP_INCLUDES_URL = `${BASE_URL}/wp-includes`;
const THEME_URL = `${BASE_URL}/wp-content/themes/planet4-master-theme/assets/build`;
const PLUGIN_URL = `${BASE_URL}/wp-content/plugins/planet4-plugin-gutenberg-blocks/assets/build`;
const GRAVITYFORMS_URL = `${BASE_URL}/wp-content/plugins/gravityforms/assets/js/dist`;

const SCRIPTS = [
    { src: "https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js?ver=1.12.1", id: "rellax-js" },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js?ver=2.0.8", id: "hammer-js" },
    { src: "https://www.googletagmanager.com/gtag/js?id=AW-11344709841", async: true },
    { src: `${GRAVITYFORMS_URL}/gravityforms.min.js`, id: "gform_gravityforms-js", defer: true },
    { src: `${GRAVITYFORMS_URL}/vendor-theme.min.js`, id: "gform_gravityforms_theme_vendors-js", defer: true },
    { src: `${GRAVITYFORMS_URL}/scripts-theme.min.js`, id: "gform_gravityforms_theme-js", defer: true },
    { src: `${WP_INCLUDES_URL}/js/dist/vendor/react.min.js`, id: "react-js" },
    { src: `${WP_INCLUDES_URL}/js/dist/vendor/react-dom.min.js`, id: "react-dom-js" },
    { src: `${WP_INCLUDES_URL}/js/dist/escape-html.min.js`, id: "wp-escape-html-js" },
    { src: `${WP_INCLUDES_URL}/js/dist/element.min.js`, id: "wp-element-js" },
    { src: `${WP_INCLUDES_URL}/js/dist/hooks.min.js`, id: "wp-hooks-js" },
    { src: `${WP_INCLUDES_URL}/js/dist/i18n.min.js`, id: "wp-i18n-js" },
    { src: `${PLUGIN_URL}/frontendIndex.js`, id: "planet4-blocks-script-js" },
    { src: `${THEME_URL}/index.js`, id: "main-js" },
    { src: `${THEME_URL}/lite-yt-embed.js`, id: "youtube-js" },
    { src: `${THEME_URL}/frontendIndex.js`, id: "planet4-blocks-theme-script-js" },
    { src: `${THEME_URL}/GalleryScript.js`, id: "planet4-blocks/gallery-script-js" },
    { src: `${PLUGIN_URL}/ArticlesScript.js`, id: "planet4-blocks/articles-script-js" },
    { src: `${PLUGIN_URL}/CoversScript.js`, id: "planet4-blocks/covers-script-js" },
    { src: `${WP_INCLUDES_URL}/js/dist/dom-ready.min.js`, id: "wp-dom-ready-js" },
    { src: `${WP_INCLUDES_URL}/js/dist/a11y.min.js`, id: "wp-a11y-js" },
    { src: `${GRAVITYFORMS_URL}/placeholders.jquery.min.js`, id: "gform_placeholder-js", defer: true },
    { src: `${GRAVITYFORMS_URL}/vendor-theme.min.js`, id: "gform_gravityforms_theme_vendors-js", defer: true },
    { src: `${GRAVITYFORMS_URL}/scripts-theme.min.js`, id: "gform_gravityforms_theme-js", defer: true },
    { src: `${THEME_URL}/gravityforms-client-side.js`, id: "p4-gf-client-side-js" },
    // { src: `${THEME_URL}/CarouselHeaderScript.js`, id: "planet4-blocks/carousel-header-script-js", async: true, defer: true },
];

export default function HeaderJs() {
    useEffect(() => {
        const carouselScript = document.createElement('script');
        carouselScript.src = `${THEME_URL}/CarouselHeaderScript.js`;
        carouselScript.async = true;
        carouselScript.defer = true;
    
        document.addEventListener("DOMContentLoaded", function () {
          document.body.appendChild(carouselScript);
        });
    
        // Cleanup the listener on component unmount
        return () => {
          document.removeEventListener("DOMContentLoaded", function () {
            document.body.removeChild(carouselScript);
          });
        };
    }, []);

    return (
        <>
        {SCRIPTS.map((script, index) => {
            return (
                <script key={index} type="text/javascript" src={script.src} id={script.id} async />
            );
        })}
        </>
    );
}
