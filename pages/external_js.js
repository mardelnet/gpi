const BASE_URL = "https://www.greenpeace.org/international";
const WP_INCLUDES_URL = `${BASE_URL}/wp-includes`;
const THEME_URL = `${BASE_URL}/wp-content/themes/planet4-master-theme/assets/build`;
const PLUGIN_URL = `${BASE_URL}/wp-content/plugins/planet4-plugin-gutenberg-blocks/assets/build`;
const GRAVITYFORMS_URL = `${BASE_URL}/wp-content/plugins/gravityforms/assets/js/dist`;

const SCRIPTS = [
  {
    type: "application/ld+json",
    content: JSON.stringify({
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: BASE_URL,
      name: "Greenpeace International",
      alternateName: "Greenpeace",
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/?s={search_term_string}&orderby=_score`,
        "query-input": "required name=search_term_string",
      },
    }),
  },
  {
    type: "application/ld+json",
    content: JSON.stringify({
      "@context": "http://schema.org",
      "@type": "Organization",
      url: BASE_URL,
      sameAs: [
        "https://www.instagram.com/greenpeace/",
        "https://x.com/greenpeace",
        "https://www.tiktok.com/@greenpeace_international",
        "https://www.youtube.com/greenpeace",
        "https://www.linkedin.com/company/greenpeace-international/jobs/",
        "https://www.facebook.com/greenpeace.international",
        "https://www.greenpeace.org/international/feed/",
        "https://github.com/greenpeace/planet4",
      ],
      name: "Greenpeace International",
      logo: `${BASE_URL}/wp-content/themes/planet4-master-theme/images/Greenpeace-logo.png`,
    }),
  },
  { type: "text/javascript", src: `${WP_INCLUDES_URL}/js/jquery/jquery.min.js?ver=3.7.1`, id: "jquery-core-js" },
  { type: "text/javascript", src: `${WP_INCLUDES_URL}/js/jquery/jquery-migrate.min.js?ver=3.4.1`, id: "jquery-migrate-js" },
  { type: "text/javascript", src: `${GRAVITYFORMS_URL}/jquery.json.min.js?ver=2.8.17`, id: "gform_json-js", defer: true },
  { type: "text/javascript", id: "gform_gravityforms-js-extra" },
  { type: "text/javascript", src: `${GRAVITYFORMS_URL}/gravityforms.min.js?ver=2.8.17`, id: "gform_gravityforms-js", defer: true },
  { type: "text/javascript", src: `${GRAVITYFORMS_URL}/vendor-theme.min.js?ver=54e7080aa7a02c83aa61fae430b9d869`, id: "gform_gravityforms_theme_vendors-js", defer: true },
  { type: "text/javascript", src: `${GRAVITYFORMS_URL}/scripts-theme.min.js?ver=bab19fd84843dabc070e73326d787910`, id: "gform_gravityforms_theme-js", defer: true },
  { type: "text/javascript", async: true, src: "https://www.googletagmanager.com/gtag/js?id=AW-11344709841" },
  { type: "text/javascript", src: `${WP_INCLUDES_URL}/js/dist/vendor/react.min.js?ver=18.3.1`, id: "react-js" },
  { type: "text/javascript", src: `${WP_INCLUDES_URL}/js/dist/vendor/react-dom.min.js?ver=18.3.1`, id: "react-dom-js" },
  { type: "text/javascript", src: `${WP_INCLUDES_URL}/js/dist/escape-html.min.js?ver=6561a406d2d232a6fbd2`, id: "wp-escape-html-js" },
  { type: "text/javascript", src: `${WP_INCLUDES_URL}/js/dist/element.min.js?ver=cb762d190aebbec25b27`, id: "wp-element-js" },
  { type: "text/javascript", src: `${WP_INCLUDES_URL}/js/dist/hooks.min.js?ver=2810c76e705dd1a53b18`, id: "wp-hooks-js" },
  { type: "text/javascript", src: `${WP_INCLUDES_URL}/js/dist/i18n.min.js?ver=5e580eb46a90c2b997e6`, id: "wp-i18n-js" },
  { type: "text/javascript", src: `${PLUGIN_URL}/frontendIndex.js?ver=1727951234`, id: "planet4-blocks-script-js" },
  { type: "text/javascript", src: "https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js?ver=1.12.1", id: "rellax-js" },
  { type: "text/javascript", src: `${THEME_URL}/index.js?ver=1727951235`, id: "main-js" },
  { type: "text/javascript", src: `${THEME_URL}/lite-yt-embed.js?ver=1`, id: "youtube-js" },
  { type: "text/javascript", src: `${THEME_URL}/frontendIndex.js?ver=1727951235`, id: "planet4-blocks-theme-script-js" },
  { type: "text/javascript", src: "https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js?ver=2.0.8", id: "hammer-js" },
  { type: "text/javascript", src: `${THEME_URL}/CarouselHeaderScript.js?ver=1727951235`, id: "planet4-blocks/carousel-header-script-js" },
  { type: "text/javascript", src: `${THEME_URL}/GalleryScript.js?ver=1727951235`, id: "planet4-blocks/gallery-script-js" },
  { type: "text/javascript", src: `${PLUGIN_URL}/ArticlesScript.js?ver=1727951234`, id: "planet4-blocks/articles-script-js" },
  { type: "text/javascript", src: `${PLUGIN_URL}/CoversScript.js?ver=1727951234`, id: "planet4-blocks/covers-script-js" },
  { type: "text/javascript", src: `${WP_INCLUDES_URL}/js/dist/dom-ready.min.js?ver=f77871ff7694fffea381`, id: "wp-dom-ready-js" },
  { type: "text/javascript", src: `${WP_INCLUDES_URL}/js/dist/a11y.min.js?ver=d90eebea464f6c09bfd5`, id: "wp-a11y-js" },
  { type: "text/javascript", src: `${GRAVITYFORMS_URL}/placeholders.jquery.min.js?ver=2.8.17`, id: "gform_placeholder-js", defer: true },
  { type: "text/javascript", src: `${GRAVITYFORMS_URL}/vendor-theme.min.js?ver=54e7080aa7a02c83aa61fae430b9d869`, id: "gform_gravityforms_theme_vendors-js", defer: true },
  { type: "text/javascript", src: `${GRAVITYFORMS_URL}/scripts-theme.min.js?ver=bab19fd84843dabc070e73326d787910`, id: "gform_gravityforms_theme-js", defer: true },
  { type: "text/javascript", src: `${THEME_URL}/gravityforms-client-side.js?ver=6.6.2`, id: "p4-gf-client-side-js" },
];

export default function ExternalJs() {
  return (
    <>
      {SCRIPTS.map((script, index) => {
        return script.content ? (
          <script key={index} type={script.type} dangerouslySetInnerHTML={{ __html: script.content }} />
        ) : (
          <script key={index} type={script.type} src={script.src} id={script.id} defer={script.defer} async={script.async} />
        );
      })}
    </>
  );
}
