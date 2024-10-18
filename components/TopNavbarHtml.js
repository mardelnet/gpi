export default function TopNavbarHtml() {
    return(
        <header id="header" className="top-navigation navbar with-mobile-tabs">
            <button className="nav-menu-toggle" type="button" aria-label="Toggle navigation menu" data-ga-category="Menu Navigation" data-ga-action="Open Menu" data-ga-label="Homepage" aria-expanded="false" data-bs-toggle="open" data-bs-target="#nav-main">
                <svg data-ga-category="Menu Navigation" data-ga-action="Menu" data-ga-label="Homepage" viewBox="0 0 32 32" className="icon">
                <use href="/wp-content/themes/planet4-master-theme/assets/build/sprite.symbol.svg#menu"></use>
                </svg>
                <span className="visually-hidden"> Menu </span>
            </button>
            <a className="site-logo" href="/">
                <img src="https://www.greenpeace.org/international/wp-content/themes/planet4-master-theme/images/gp-logo.svg" alt="Greenpeace" data-ga-category="Menu Navigation" data-ga-action="Greenpeace Logo" data-ga-label="Homepage" />
            </a>
            <div id="nav-main-desktop" className="d-none d-lg-flex">
                <nav id="nav-menu" className="nav-menu">
                <ul>
                    <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61639 menu-item-has-children ">
                    <a className="nav-link" href="/explore/" target="" data-ga-category="Menu Navigation" data-ga-action="Explore" data-ga-label="Homepage"> Issues we work on </a>
                    <nav className="nav-submenu">
                        <ul>
                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61640 ">
                            <a className="nav-link" href="/explore/energy/" target="" data-ga-category="Submenu Navigation" data-ga-action="Climate and Energy" data-ga-label="Homepage"> Climate and Energy </a>
                        </li>
                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61641 ">
                            <a className="nav-link" href="/explore/nature/" target="" data-ga-category="Submenu Navigation" data-ga-action="Biodiversity" data-ga-label="Homepage"> Biodiversity </a>
                        </li>
                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61642 ">
                            <a className="nav-link" href="/explore/people/" target="" data-ga-category="Submenu Navigation" data-ga-action="Social and Economic" data-ga-label="Homepage"> Social and Economic </a>
                        </li>
                        </ul>
                    </nav>
                    </li>
                    <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61636 ">
                    <a className="nav-link" href="/get-involved/" target="" data-ga-category="Menu Navigation" data-ga-action="Act" data-ga-label="Homepage"> Get involved </a>
                    </li>
                    <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61637 menu-item-has-children ">
                    <a className="nav-link" href="/posts/" target="" data-ga-category="Menu Navigation" data-ga-action="News and Stories" data-ga-label="Homepage"> News and Stories </a>
                    <nav className="nav-submenu">
                        <ul>
                        <li className="nav-item menu-item menu-item-type-taxonomy menu-item-object-p4-page-type menu-item-61652 ">
                            <a className="nav-link" href="/story/" target="" data-ga-category="Submenu Navigation" data-ga-action="Stories" data-ga-label="Homepage"> Stories </a>
                        </li>
                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61638 ">
                            <a className="nav-link" href="/press-centre/" target="" data-ga-category="Submenu Navigation" data-ga-action="Press centre" data-ga-label="Homepage"> Press centre </a>
                        </li>
                        <li className="nav-item menu-item menu-item-type-taxonomy menu-item-object-p4-page-type menu-item-61653 ">
                            <a className="nav-link" href="/publication/" target="" data-ga-category="Submenu Navigation" data-ga-action="Publications" data-ga-label="Homepage"> Publications </a>
                        </li>
                        <li className="nav-item menu-item menu-item-type-taxonomy menu-item-object-p4-page-type menu-item-65409 ">
                            <a className="nav-link" href="/podcasts/" target="" data-ga-category="Submenu Navigation" data-ga-action="Podcasts" data-ga-label="Homepage"> Podcasts </a>
                        </li>
                        </ul>
                    </nav>
                    </li>
                    <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61643 menu-item-has-children ">
                    <a className="nav-link" href="about/" target="" data-ga-category="Menu Navigation" data-ga-action="About us" data-ga-label="Homepage"> About us </a>
                    <nav className="nav-submenu">
                        <ul>
                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61648 ">
                            <a className="nav-link" href="/about/ships/" target="" data-ga-category="Submenu Navigation" data-ga-action="Our ships" data-ga-label="Homepage"> Our ships </a>
                        </li>
                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61647 ">
                            <a className="nav-link" href="/about/worldwide/" target="" data-ga-category="Submenu Navigation" data-ga-action="National/Regional Organisations" data-ga-label="Homepage"> National/Regional Organisations </a>
                        </li>
                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61645 ">
                            <a className="nav-link" href="/about/governance/" target="" data-ga-category="Submenu Navigation" data-ga-action="How we're governed" data-ga-label="Homepage"> How we're governed </a>
                        </li>
                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61644 ">
                            <a className="nav-link" href="/about/annual-report/" target="" data-ga-category="Submenu Navigation" data-ga-action="Annual reports" data-ga-label="Homepage"> Annual reports </a>
                        </li>
                        </ul>
                    </nav>
                    </li>
                    <li className="nav-donate">
                    <a className="btn btn-donate dropdown" href="support/donate-today/" data-ga-category="Menu Navigation" data-ga-action="Donate" data-ga-label="Homepage"> Donate </a>
                    <nav className="nav-submenu">
                        <ul>
                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-p4_action menu-item-61835 ">
                            <a className="nav-link" href="/support/donate-today/" target="" data-ga-category="Submenu Navigation" data-ga-action="Donate today" data-ga-label="Homepage"> Donate today </a>
                        </li>
                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-p4_action menu-item-61766 ">
                            <a className="nav-link" href="/support/legacy/" target="" data-ga-category="Submenu Navigation" data-ga-action="Leave a legacy" data-ga-label="Homepage"> Leave a legacy </a>
                        </li>
                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61656 ">
                            <a className="nav-link" href="/about/values/" target="" data-ga-category="Submenu Navigation" data-ga-action="Fundraising principles" data-ga-label="Homepage"> Fundraising principles </a>
                        </li>
                        </ul>
                    </nav>
                    </li>
                </ul>
                </nav>
                <div className="nav-search-toggle-container">
                <button className="nav-search-toggle" type="button" aria-label="Toggle search box" aria-expanded="false" data-bs-toggle="open" data-bs-target="#search_form" data-ga-category="Menu Navigation" data-ga-action="Open Search" data-ga-label="Homepage">
                    <svg data-ga-category="Menu Navigation" data-ga-action="Menu" data-ga-label="Homepage" viewBox="0 0 32 32" className="icon">
                    <use href="/wp-content/themes/planet4-master-theme/assets/build/sprite.symbol.svg#search"></use>
                    </svg>
                    <span className="visually-hidden"> Toggle search form </span>
                </button>
                </div>
            </div>
            <div className="nav-search-toggle-container medium-and-less">
                <button className="nav-search-toggle" type="button" aria-label="Toggle search box" aria-expanded="false" data-bs-toggle="open" data-bs-target="#search_form" data-ga-category="Menu Navigation" data-ga-action="Open Search" data-ga-label="Homepage">
                <svg data-ga-category="Menu Navigation" data-ga-action="Menu" data-ga-label="Homepage" viewBox="0 0 32 32" className="icon">
                    <use href="/wp-content/themes/planet4-master-theme/assets/build/sprite.symbol.svg#search"></use>
                </svg>
                <span className="visually-hidden"> Toggle search form </span>
                </button>
            </div>
            <form id="search_form" className="form nav-search-form" action="https://www.greenpeace.org/international/">
                <button className="nav-search-btn" aria-label="Press return/enter or click to search" type="submit" data-ga-category="Menu Navigation" data-ga-action="Search" data-ga-label="Homepage">
                <svg data-ga-category="Menu Navigation" data-ga-action="Menu" data-ga-label="Homepage" viewBox="0 0 32 32" className="icon">
                    <use href="/wp-content/themes/planet4-master-theme/assets/build/sprite.symbol.svg#search"></use>
                </svg>
                <span className="visually-hidden" data-ga-category="Menu Navigation" data-ga-action="Search" data-ga-label="Homepage"> Search </span>
                </button>
                <input id="search_input" type="search" name="s" className="form-control" placeholder="Search" value="" aria-label="Search input" />
                <input id="orderby" type="hidden" name="orderby" value="_score" />
                <button className="nav-search-clear" aria-label="Clear search" type="button" onclick="document.getElementById('search_input').value=null;">
                <span className="visually-hidden">Clear search</span>
                </button>
            </form>
            <div id="nav-mobile">
                <nav id="nav-mobile-menu">
                <ul>
                    <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61639 menu-item-has-children ">
                    <a className="nav-link" href="/explore/" target="" data-ga-category="Menu Navigation" data-ga-action="Issues we work on" data-ga-label="Homepage"> Issues we work on </a>
                    </li>
                    <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61636 ">
                    <a className="nav-link" href="/get-involved/" target="" data-ga-category="Menu Navigation" data-ga-action="Get involved" data-ga-label="Homepage"> Get involved </a>
                    </li>
                    <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61637 menu-item-has-children ">
                    <a className="nav-link" href="/posts/" target="" data-ga-category="Menu Navigation" data-ga-action="News and Stories" data-ga-label="Homepage"> News and Stories </a>
                    </li>
                    <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-61643 menu-item-has-children ">
                    <a className="nav-link" href="/about/" target="" data-ga-category="Menu Navigation" data-ga-action="About us" data-ga-label="Homepage"> About us </a>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
    );
}