import {API_BASE_URL} from '../utils/constants';

export const fetchPageData = async (slug = 'home') => {
    const res = await fetch(`${API_BASE_URL}?slug=${slug}`);
    const repo = await res.json();

    // Check if the repo is empty and return null if it is
    if (!repo || repo.length === 0) {
        return null; // Indicate that no data was found
    }

    return repo; // Return the fetched data
};
