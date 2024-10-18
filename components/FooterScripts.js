import {BASE_URL, GRAVITYFORMS_JS_URL} from '../utils/constants';

const WP_INCLUDES_URL = `${BASE_URL}/wp-includes`;
const CLOUDFLARE_URL = 'https://cdnjs.cloudflare.com/ajax/libs';

const SCRIPTS = [
    { src: "https://www.googletagmanager.com/gtag/js?id=AW-11344709841", async: true },
    { src: `${CLOUDFLARE_URL}/rellax/1.12.1/rellax.min.js?ver=1.12.1`, id: "rellax-js" },
    { src: `${CLOUDFLARE_URL}/hammer.js/2.0.8/hammer.min.js?ver=2.0.8`, id: "hammer-js" },
    { src: `${WP_INCLUDES_URL}/js/dist/vendor/react.min.js`, id: "react-js" },
    { src: `${WP_INCLUDES_URL}/js/dist/vendor/react-dom.min.js`, id: "react-dom-js" },
    { src: `${WP_INCLUDES_URL}/js/dist/escape-html.min.js`, id: "wp-escape-html-js" },
    { src: `${WP_INCLUDES_URL}/js/dist/element.min.js`, id: "wp-element-js" },
    { src: `${WP_INCLUDES_URL}/js/dist/hooks.min.js`, id: "wp-hooks-js" },
    { src: `${WP_INCLUDES_URL}/js/dist/i18n.min.js`, id: "wp-i18n-js" },
    { src: `${WP_INCLUDES_URL}/js/dist/dom-ready.min.js`, id: "wp-dom-ready-js" },
    { src: `${WP_INCLUDES_URL}/js/dist/a11y.min.js`, id: "wp-a11y-js" },
    { src: `${GRAVITYFORMS_JS_URL}/gravityforms.min.js`, id: "gform_gravityforms-js", defer: true },
    { src: `${GRAVITYFORMS_JS_URL}/vendor-theme.min.js`, id: "gform_gravityforms_theme_vendors-js", defer: true },
    { src: `${GRAVITYFORMS_JS_URL}/scripts-theme.min.js`, id: "gform_gravityforms_theme-js", defer: true },
    { src: `${GRAVITYFORMS_JS_URL}/placeholders.jquery.min.js`, id: "gform_placeholder-js", defer: true },
    { src: `${GRAVITYFORMS_JS_URL}/vendor-theme.min.js`, id: "gform_gravityforms_theme_vendors-js", defer: true },
    { src: `${GRAVITYFORMS_JS_URL}/scripts-theme.min.js`, id: "gform_gravityforms_theme-js", defer: true },
];

export default function FooterScripts() {
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
