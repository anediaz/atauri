import { FLICKR_USER_ID, PageType } from "./constants";

const getAPIKey = (type: PageType) => {
    switch (type) {
        case 'gatza':
            return import.meta.env.VITE_FLICKR_GENERAL_API_KEY;
        case 'araotz':
            return import.meta.env.VITE_FLICKR_ARAOTZ_API_KEY;
        case 'bestaldetik':
            return import.meta.env.VITE_FLICKR_GENERAL_API_KEY;
        case 'home':
            return import.meta.env.VITE_FLICKR_GENERAL_API_KEY;
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

export interface FlickrPhotoset {
    id: string;
    title: { _content: string };
    description: { _content: string };
    machine_tags?: string;
    photos?: number;
}

export interface DynamicAlbumItem {
    title: string;
    path: string;
    photosetId: string;
}

export interface FlickrCollectionSet {
    id: string;
    title: string;
}

export interface FlickrCollection {
    set: FlickrCollectionSet[];
}

const COLLECTION_ID = '72157724618607950';

export const getCollections = async (): Promise<FlickrCollection> => {
    const apiKey = import.meta.env.VITE_FLICKR_GENERAL_API_KEY;
    const photosURL = `https://api.flickr.com/services/rest/?method=flickr.collections.getTree&api_key=${apiKey}&user_id=${FLICKR_USER_ID}&collection_id=${COLLECTION_ID}&format=json&nojsoncallback=true`;

    const response = await fetch(photosURL);
    return response && response.ok
        ? (await response.json()).collections.collection[0]
        : { set: [] };
};