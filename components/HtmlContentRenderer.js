import { useEffect, useState } from 'react';

const HtmlContentRenderer = ({ repo }) => {
    const [htmlContent, setHtmlContent] = useState(null);

    useEffect(() => {
        // Check if repo has data
        if (repo && repo.length > 0) {
            // Replace all instances of the full URL with the base URL
            const modifiedContent = repo[0].content.rendered.replace(/https:\/\/www\.greenpeace\.org\/international/g, '');
            // Set the modified content after the component has mounted to prevent hydration issues
            setHtmlContent(modifiedContent);
        }
    }, [repo]);

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

export default HtmlContentRenderer;

