import { fetchPageData } from '../../../functions/fetchPageData';
import HtmlContentRenderer from '../../../components/HtmlContentRenderer';

// Fetch both slugs and child_slugs (nested paths)
export async function getStaticPaths() {
    const res = await fetch('https://www.greenpeace.org/international/wp-json/wp/v2/pages');
    const pages = await res.json();

    const paths = pages.map(page => {
        // For simplicity, this assumes that child pages have slashes in their "link" attribute
        // Example: '/explore/energy'
        const parts = page.link
            .replace('https://www.greenpeace.org/international/', '') // Remove base URL
            .split('/')
            .filter(Boolean); // Remove empty parts caused by trailing slashes

        // If the page has both slug and child_slug
        if (parts.length === 2) {
            return {
                params: {
                    slug: parts[0], // First part of the URL
                    child_slug: parts[1] // Second part (child page)
                }
            };
        }
    }).filter(Boolean); // Remove undefined values for non-child pages

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const repo = await fetchPageData(params.child_slug);
    if (!repo) {
        return {
            notFound: true,
        };
    }
    return { props: { repo } };
}

export default function Page({ repo }) {
    return (
        <div>
            <HtmlContentRenderer repo={repo} />
        </div>
    );
}