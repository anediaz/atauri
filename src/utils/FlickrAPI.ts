import { PageType } from "./constants";

const getAPIKey = (type: PageType) => {
    switch (type) {
        case 'gatza':
            return import.meta.env.VITE_FLICKR_GATZA_API_KEY;
        case 'araotz':
            return import.meta.env.VITE_FLICKR_ARAOTZ_API_KEY;
        default:
            throw new Error(`Unknown page type: ${type}`);
    }

}

export const getPhotos = async (type: PageType, photoSetId: string, sizes: string[], perPage?: number) => {
    const sizesParam = sizes.join(',');
    const apiKey = getAPIKey(type);
    const photosURL = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${photoSetId}&extras=${sizesParam}&${perPage ? `per_page=${perPage}` : ''}&format=json&nojsoncallback=true`;
    const response = await fetch(photosURL);
    return response && response.ok
        ? (await response.json()).photoset.photo
        : `Error while reading photoset=${photoSetId}`;
};