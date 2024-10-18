export const fetchPageData = async (slug = 'home') => {
    const res = await fetch(`https://www.greenpeace.org/international/wp-json/wp/v2/pages?slug=${slug}`);
    const repo = await res.json();

    // Check if the repo is empty and return null if it is
    if (!repo || repo.length === 0) {
        return null; // Indicate that no data was found
    }

    return repo; // Return the fetched data
};
