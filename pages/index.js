import { fetchPageData } from '../utils/fetchPageData';
import HtmlContentRenderer from '../components/HtmlContentRenderer';

export async function getStaticProps({ params }) {
    const repo = await fetchPageData();
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
