const BASE_URL = "https://www.greenpeace.org/international";
const WP_INCLUDES_URL = `${BASE_URL}/wp-includes`;
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
];

export default function HeaderJs() {
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
