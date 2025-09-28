import { useEffect, useState } from 'react';
import { getPhotos } from 'utils/FlickrAPI';
import { PageType, SizeKeys } from 'utils/constants';
import { TransformedPhotoProps, transformToPhoto } from 'utils/transform-flickr-result';

const defDefault = SizeKeys.medium800;
const bigDefault = SizeKeys.large;

// Type guard to check if result is an array of FlickrResult arrays
const isArrayOfFlickrResultArrays = (result: any): result is any[][] => {
    return Array.isArray(result) && result.every(item => Array.isArray(item) && item.length > 0 && typeof item[0] === 'object' && item[0] !== null);
};

interface usePhotosProps {
    pageType: PageType,
    photosetId: string | string[],
    withTags?: boolean,
    shouldFetch?: boolean,
    def?: SizeKeys,
    big?: SizeKeys
}

export const usePhotos = ({ pageType,
    photosetId, withTags = false, shouldFetch = true, def = defDefault, big = bigDefault,
}: usePhotosProps) => {
    const [photosState, setPhotosState] = useState({ 
        isLoading: true, 
        isPhotosFailed: false, 
        photos: <TransformedPhotoProps[]>[] 
    });
    const params = [
        `url${def}`,
        `url${bigDefault}`,
        ...(withTags ? ['tags'] : []),
    ];
    useEffect(() => {
        // method that fetches and transforms photos to the right format
        const loadPhotos = async (id: string) => {
            setPhotosState(prev => ({ ...prev, isLoading: true }));
            const result = await getPhotos(pageType, id, params);
            if (typeof result === 'string') {
                setPhotosState({ isLoading: false, isPhotosFailed: true, photos: [] });
                return;
            }
            const transformed = transformToPhoto(result, def, big);
            setPhotosState({ isLoading: false, isPhotosFailed: false, photos: transformed });
        };
        const loadOnlyOne = async (ids: string[]) => {
            setPhotosState(prev => ({ ...prev, isLoading: true }));
            const result = await Promise.all(ids.map(id => getPhotos(pageType, id, [...params], 1)))

            // Use type guard to check if result is an array of FlickrResult arrays
            if (!isArrayOfFlickrResultArrays(result)) {
                setPhotosState({ isLoading: false, isPhotosFailed: true, photos: [] });
                return;
            }

            const transformed = transformToPhoto(result.flat(), def, big);
            setPhotosState({ isLoading: false, isPhotosFailed: false, photos: transformed });
        };
        if (!shouldFetch) {
            setPhotosState(prev => ({ ...prev, isLoading: false }));
            return;
        }
        if (Array.isArray(photosetId)) {
            loadOnlyOne(photosetId);
        }
        else {
            loadPhotos(photosetId);
        }
    }, [big, def, photosetId, shouldFetch, withTags]);

    return photosState;
};

