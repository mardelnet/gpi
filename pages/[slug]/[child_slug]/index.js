import { useEffect, useState } from 'react';

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

// Fetch content based on the child_slug (last part of the URL)
export async function getStaticProps({ params }) {
    const { child_slug } = params; // Only use child_slug for fetching content
    const res = await fetch(`https://www.greenpeace.org/international/wp-json/wp/v2/pages?slug=${child_slug}`);
    const repo = await res.json();

    // Return 404 if no page matches the slug
    if (!repo || repo.length === 0) {
        return {
            notFound: true,
        };
    }

    return { props: { repo } };
}

export default function Page({ repo }) {
    const [htmlContent, setHtmlContent] = useState(null);

    // Handle content rendering
    useEffect(() => {
        if (repo && repo.length > 0) {
            setHtmlContent(repo[0].content.rendered);
        }
    }, [repo]);

    return (
        <div>
            {htmlContent ? (
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            ) : (
                <p>Loading content...</p>
            )}
        </div>
    );
}
