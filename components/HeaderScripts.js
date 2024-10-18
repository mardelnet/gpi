import {BASE_URL, MAIN_THEME_URL, GRAVITYFORMS_JS_URL} from '../utils/constants';

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
      logo: `${MAIN_THEME_URL}/images/Greenpeace-logo.png`,
    }),
  },
  { type: "text/javascript", src: `${BASE_URL}/wp-includes/js/jquery/jquery.min.js?ver=3.7.1`, id: "jquery-core-js" },
  { type: "text/javascript", src: `${BASE_URL}/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1`, id: "jquery-migrate-js" },
  { type: "text/javascript", src: `${GRAVITYFORMS_JS_URL}/jquery.json.min.js?ver=2.8.17`, id: "gform_json-js", defer: true },
  {
    type: "text/javascript",
    id: "planet4-blocks-script-js-extra",
    content: `/* <![CDATA[ */\nvar p4bk_vars = {"dateFormat":"j F Y","siteUrl":"${BASE_URL}","themeUrl":"${MAIN_THEME_URL}","enable_analytical_cookies":"on","enable_google_consent_mode":"on","cookies_default_copy":{"necessary_cookies_name":"Necessary Cookies (required)","necessary_cookies_description":"These cookies are required for technical reasons so that you can visit our website and use the functions we offer. These cookies are used to recognise you between successive visits and thus provide you with a better experience, storing your consent preferences and the last Greenpeace.org website visited.","analytical_cookies_name":"Performance cookies","analytical_cookies_description":"We use tracking and analysis tools to ensure continuous optimisation and demand-oriented design of our website. These cookies will allow us to collect statistical and anonymised data, such as how visitors use our website or which pages are accessed most frequently, to ultimately improve Greenpeace.org and provide you with a better experience of our website.","all_cookies_name":"Marketing cookies","all_cookies_description":"In addition to the Performance cookies mentioned above, we may also place in your browser cookies from third-party services (e.g. Facebook or Google) to track the effectiveness of our online marketing strategies and to deliver adverts more relevant to you and your interests. These cookies may also be used to serve advertising to you after you have left our site (retargeting cookies)."},"cookies_field":"We use cookies to enhance your experience. By clicking \\"Accept all cookies\\" you agree to our <a href=\\"http://www.greenpeace.org/international/privacy/\\" >Privacy & Cookies Policy</a>. You can <a href=\\"https://www.greenpeace.org/international/privacy/#cookies\\">change your cookies settings anytime</a>.","page_text_404":"<h2>This page might be extinct!</h2>\\r\\n<ul>\\r\\n \\t<li>Please try again using the Search box below,</li>\\r\\n \\t<li>Search our <a href=\\"https://archive-it.org/organizations/1342\\">archive</a>,</li>\\r\\n \\t<li>Or <a href=\\"mailto:wint@greenpeace.org?subject=Page%20Not%20Found\\">contact us</a> about the problem. Please provide information for the page you are looking for (e.g. link, keyword).</li>\\r\\n</ul>\\r\\n","page_bg_image_404":"https://www.greenpeace.org/static/planet4-international-stateless/2018/03/4ae90728-gp0stpsh7_flipped.jpg"};\n/* ]]> */`
  },
];

export default function HeaderScripts() {
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
