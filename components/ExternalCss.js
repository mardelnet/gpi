import {BASE_URL, MAIN_THEME_URL, P4_PLUGIN_URL, GRAVITYFORMS_CSS_URL} from '../utils/constants';

const THEME_URL = `${MAIN_THEME_URL}/assets/build`;
const PLUGIN_URL = `${P4_PLUGIN_URL}/assets/build`;
const ELASTICPRESS_URL = `${BASE_URL}/wp-content/plugins/elasticpress/dist/css`;
const CHILD_THEME_URL = `${BASE_URL}/wp-content/themes/planet4-child-theme-international`;

const STYLES = [
  { id: "bootstrap-css", href: `${THEME_URL}/bootstrap.min.css` },
  { id: "parent-style-css", href: `${THEME_URL}/style.min.css` },
  { id: "country-selector-css", href: `${THEME_URL}/country-selector.min.css` },
  { id: "gravity-forms-style-css", href: `${THEME_URL}/gravity-forms.min.css` },
  { id: "wp-block-library-css", href: `${BASE_URL}/wp-includes/css/dist/block-library/style.min.css` },
  { id: "planet4-blocks-style-css", href: `${PLUGIN_URL}/style.min.css` },
  { id: "elasticpress-facets-css", href: `${ELASTICPRESS_URL}/facets-styles.css` },
  { id: "planet4-blocks/gallery-style-css", href: `${THEME_URL}/GalleryStyle.min.css` },
  { id: "planet4-blocks/articles-style-css", href: `${PLUGIN_URL}/ArticlesStyle.min.css` },
  { id: "planet4-blocks/covers-style-css", href: `${PLUGIN_URL}/CoversStyle.min.css` },
  { id: "gform_basic-css", href: `${GRAVITYFORMS_CSS_URL}/basic.min.css` },
  { id: "gform_theme_components-css", href: `${GRAVITYFORMS_CSS_URL}/theme-components.min.css` },
  { id: "gform_theme_ie11-css", href: `${GRAVITYFORMS_CSS_URL}/theme-ie11.min.css` },
  { id: "gform_theme-css", href: `${GRAVITYFORMS_CSS_URL}/theme.min.css` },
  { id: "child-style-css", href: `${CHILD_THEME_URL}/style.css` },
  { href: `${PLUGIN_URL}/lightbox.min.css`, media: "print", onLoad: "this.media='all'" },
];

export default function ExternalCss() {
  return (
    <>
      {STYLES.map((style, index) => (
        <link
          key={index}
          rel="stylesheet"
          id={style.id}
          href={style.href}
          type="text/css"
          media={style.media || "all"}
          onLoad={style.onLoad}
        />
      ))}
    </>
  );
}
