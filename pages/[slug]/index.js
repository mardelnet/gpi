import { useEffect, useState } from 'react';

export async function getStaticPaths() {
    const res = await fetch('https://www.greenpeace.org/international/wp-json/wp/v2/pages');
    const pages = await res.json();

    const paths = pages.map(page => ({
        params: { slug: page.slug }
    }));

    return { paths, fallback: true }; // Enable fallback
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://www.greenpeace.org/international/wp-json/wp/v2/pages?slug=${params.slug}`);
    const repo = await res.json();

    // Check if the repo is empty and return 404 if it is
    if (!repo || repo.length === 0) {
        return {
            notFound: true, // Return 404 page
        };
    }

    return { props: { repo } }; // Only pass the necessary props
}

export default function Page({ repo }) {
    const [htmlContent, setHtmlContent] = useState(null);

    // Handle the case where repo is not defined or is empty
    useEffect(() => {
        if (repo && repo.length > 0) {
            // Set the content after the component has mounted to prevent hydration issues
            setHtmlContent(repo[0].content.rendered);
        }
    }, [repo]);

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
}
