import { fetchPageData } from '../../functions/fetchPageData';
import HtmlContentRenderer from '../../components/HtmlContentRenderer';

export async function getStaticPaths() {
    const res = await fetch('https://www.greenpeace.org/international/wp-json/wp/v2/pages');
    const pages = await res.json();

    const paths = pages.map(page => ({
        params: { slug: page.slug }
    }));

    return { paths, fallback: true }; // Enable fallback
}

export async function getStaticProps({ params }) {
    const repo = await fetchPageData(params.slug);
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