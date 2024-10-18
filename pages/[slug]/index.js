import {API_BASE_URL} from '../../utils/constants';
import { fetchPageData } from '../../utils/fetchPageData';
import HtmlContentRenderer from '../../components/HtmlContentRenderer';

export async function getStaticPaths() {
    const res = await fetch(API_BASE_URL);
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