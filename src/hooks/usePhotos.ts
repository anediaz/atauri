import { useQuery } from '@tanstack/react-query';
import { getPhotos } from 'utils/FlickrAPI';
import { PageType, SizeKeys } from 'utils/constants';
import { TransformedPhotoProps, transformToPhoto, FlickrResult } from 'utils/transform-flickr-result';

const defDefault = SizeKeys.medium800;
const bigDefault = SizeKeys.large;

// Type guard to check if result is an array of FlickrResult arrays
const isArrayOfFlickrResultArrays = (result: unknown): result is FlickrResult[][] => {
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
    const params = [
        `url${def}`,
        `url${bigDefault}`,
        ...(withTags ? ['tags'] : []),
    ];

    // Create a unique cache key for this photo query
    const queryKey = ['photos', pageType, photosetId, withTags, def, big];

    const fetchPhotos = async (): Promise<TransformedPhotoProps[]> => {
        if (Array.isArray(photosetId)) {
            // Handle multiple photoset IDs
            const result = await Promise.all(photosetId.map(id => getPhotos(pageType, id, [...params], 1)));
            
            if (!isArrayOfFlickrResultArrays(result)) {
                throw new Error(`Failed to fetch photos for photosets: ${photosetId.join(', ')}`);
            }
            
            return transformToPhoto(result.flat(), def, big);
        } else {
            // Handle single photoset ID
            const result = await getPhotos(pageType, photosetId, params);
            
            if (typeof result === 'string') {
                throw new Error(`Failed to fetch photos for photoset: ${photosetId}`);
            }
            
            return transformToPhoto(result, def, big);
        }
    };

    const query = useQuery({
        queryKey,
        queryFn: fetchPhotos,
        enabled: shouldFetch,
        staleTime: 20 * 60 * 1000, // 20 minutes for photo galleries
        gcTime: 2 * 60 * 60 * 1000, // 2 hours in memory
        retry: (failureCount, error) => {
            // Don't retry if it's a clear API error
            if (error.message.includes('Failed to fetch photos')) {
                return failureCount < 1;
            }
            return failureCount < 3;
        },
    });

    return {
        photos: query.data || [],
        isLoading: query.isLoading,
        isPhotosFailed: query.isError,
        error: query.error,
        refetch: query.refetch,
    };
};

