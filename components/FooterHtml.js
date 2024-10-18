import Countries from './Countries';

export default function FooterHtml() {
    return(
        <footer id="footer" className="site-footer site-footer--">
            <div id="country-selector" className="footer-country-selector">
                <div className="container">
                <div className="country-selector-toggle-container">
                    <button className="country-selector-toggle country-control-toggle" data-bs-toggle="open" data-bs-target="#country-selector" aria-expanded="false" aria-label="Toggle worldwide site selection menu" data-ga-category="Menu Navigation" data-ga-action="Open Country Selector" data-ga-label="Homepage">
                    <span className="visually-hidden">Selected:</span>International <span className="visually-hidden">Change Country</span>
                    </button>
                </div>
                </div>
                <Countries />
            </div>
            <div className="container d-flex flex-column flex-lg-row-reverse">
                <div className="footer-social-media">
                <span>Follow us</span>
                <ul className="list-unstyled">
                    <li>
                    <a href="https://www.instagram.com/greenpeace/" data-ga-category="Footer Navigation" data-ga-action="Social Icons" data-ga-label="Instagram" rel="me">
                        <svg viewBox="0 0 32 32" className="icon">
                        <use href="/wp-content/themes/planet4-master-theme/assets/build/sprite.symbol.svg#instagram"></use>
                        </svg>
                        <span className="visually-hidden">Instagram</span>
                    </a>
                    </li>
                    <li>
                    <a href="https://x.com/greenpeace" data-ga-category="Footer Navigation" data-ga-action="Social Icons" data-ga-label="Twitter" rel="me">
                        <svg viewBox="0 0 32 32" className="icon">
                        <use href="/wp-content/themes/planet4-master-theme/assets/build/sprite.symbol.svg#twitter"></use>
                        </svg>
                        <span className="visually-hidden">Twitter</span>
                    </a>
                    </li>
                    <li>
                    <a href="https://www.tiktok.com/@greenpeace_international" data-ga-category="Footer Navigation" data-ga-action="Social Icons" data-ga-label="TikTok" rel="me">
                        <svg viewBox="0 0 32 32" className="icon">
                        <use href="/wp-content/themes/planet4-master-theme/assets/build/sprite.symbol.svg#tiktok"></use>
                        </svg>
                        <span className="visually-hidden">TikTok</span>
                    </a>
                    </li>
                    <li>
                    <a href="https://www.youtube.com/greenpeace" data-ga-category="Footer Navigation" data-ga-action="Social Icons" data-ga-label="Youtube" rel="me">
                        <svg viewBox="0 0 32 32" className="icon">
                        <use href="/wp-content/themes/planet4-master-theme/assets/build/sprite.symbol.svg#youtube"></use>
                        </svg>
                        <span className="visually-hidden">Youtube</span>
                    </a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/company/greenpeace-international/jobs/" data-ga-category="Footer Navigation" data-ga-action="Social Icons" data-ga-label="Linkedin" rel="me">
                        <svg viewBox="0 0 32 32" className="icon">
                        <use href="/wp-content/themes/planet4-master-theme/assets/build/sprite.symbol.svg#linkedin"></use>
                        </svg>
                        <span className="visually-hidden">Linkedin</span>
                    </a>
                    </li>
                    <li>
                    <a href="https://www.facebook.com/greenpeace.international" data-ga-category="Footer Navigation" data-ga-action="Social Icons" data-ga-label="Facebook" rel="me">
                        <svg viewBox="0 0 32 32" className="icon">
                        <use href="/wp-content/themes/planet4-master-theme/assets/build/sprite.symbol.svg#facebook-square"></use>
                        </svg>
                        <span className="visually-hidden">Facebook</span>
                    </a>
                    </li>
                    <li>
                    <a href="/feed/" data-ga-category="Footer Navigation" data-ga-action="Social Icons" data-ga-label="RSS" rel="me">
                        <svg viewBox="0 0 32 32" className="icon">
                        <use href="/wp-content/themes/planet4-master-theme/assets/build/sprite.symbol.svg#rss"></use>
                        </svg>
                        <span className="visually-hidden">RSS</span>
                    </a>
                    </li>
                    <li>
                    <a href="https://github.com/greenpeace/planet4" data-ga-category="Footer Navigation" data-ga-action="Social Icons" data-ga-label="Github" rel="me">
                        <svg viewBox="0 0 32 32" className="icon">
                        <use href="/wp-content/themes/planet4-master-theme/assets/build/sprite.symbol.svg#github"></use>
                        </svg>
                        <span className="visually-hidden">Github</span>
                    </a>
                    </li>
                </ul>
                </div>
                <nav className="footer-menu">
                <ul className="list-unstyled">
                    <li>
                    <a href="/about/" target="" data-ga-category="Footer Navigation" data-ga-action="Footer Links" data-ga-label="About us"> About us </a>
                    </li>
                    <li>
                    <a href="/about/worldwide/" target="" data-ga-category="Footer Navigation" data-ga-action="Footer Links" data-ga-label="Contact us"> Contact us </a>
                    </li>
                    <li>
                    <a href="/join/jobs/" target="" data-ga-category="Footer Navigation" data-ga-action="Footer Links" data-ga-label="Jobs"> Jobs </a>
                    </li>
                    <li>
                    <a href="/about/values/" target="" data-ga-category="Footer Navigation" data-ga-action="Footer Links" data-ga-label="Our values"> Our values </a>
                    </li>
                    <li>
                    <a href="/press-centre/" target="" data-ga-category="Footer Navigation" data-ga-action="Footer Links" data-ga-label="Press centre"> Press centre </a>
                    </li>
                    <li>
                    <a href="/community-policy/" target="" data-ga-category="Footer Navigation" data-ga-action="Footer Links" data-ga-label="Community Policy"> Community Policy </a>
                    </li>
                    <li>
                    <a href="/copyright/" target="" data-ga-category="Footer Navigation" data-ga-action="Footer Links" data-ga-label="Copyright"> Copyright </a>
                    </li>
                    <li>
                    <a href="/privacy/" target="" data-ga-category="Footer Navigation" data-ga-action="Footer Links" data-ga-label="Privacy and cookies"> Privacy and cookies </a>
                    </li>
                    <li>
                    <a href="https://archive-it.org/organizations/1342" target="" data-ga-category="Footer Navigation" data-ga-action="Footer Links" data-ga-label="Search the archive"> Search the archive </a>
                    </li>
                    <li>
                    <a href="/terms/" target="" data-ga-category="Footer Navigation" data-ga-action="Footer Links" data-ga-label="Terms"> Terms </a>
                    </li>
                </ul>
                </nav>
            </div>
            <div className="copyright">
                <div className="container d-flex flex-column flex-xl-row">
                <span role="text">
                    <svg viewBox="0 0 32 32" className="icon">
                    <use href="/wp-content/themes/planet4-master-theme/assets/build/sprite.symbol.svg#creative-commons"></use>
                    </svg> Greenpeace International 2024 </span>
                <span role="text"> Unless <a href="/copyright/">otherwise stated</a>, the copy of the website is licensed under a <a href="https://creativecommons.org/licenses/by/2.0/">CC-BY International License</a>
                </span>
                </div>
            </div>
        </footer>
    )
}