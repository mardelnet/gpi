import { useEffect, useState } from 'react';

export async function getStaticProps() {
    const res = await fetch('https://www.greenpeace.org/international/wp-json/wp/v2/pages?slug=home');
    const repo = await res.json();
    return { props: { repo } };
}

export default function Page({ repo }) {
    const [htmlContent, setHtmlContent] = useState(null);

    useEffect(() => {
        // Set the content after the component has mounted to prevent hydration issues
        setHtmlContent(repo[0].content.rendered);
    }, [repo]);

    return (
        <div>
            {htmlContent ? (
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            ) : (
                <p>Loading content...</p> // Optional: Loading state
            )}
        </div>
    );
}
