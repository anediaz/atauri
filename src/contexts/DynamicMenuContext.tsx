import { createContext, useEffect, useState, ReactNode } from 'react';
import { getCollections, DynamicAlbumItem, FlickrCollectionSet } from 'utils/FlickrAPI';

interface DynamicMenuContextType {
    albums: DynamicAlbumItem[];
    isLoading: boolean;
    error: Error | null;
}

export const DynamicMenuContext = createContext<DynamicMenuContextType | undefined>(undefined);

interface DynamicMenuProviderProps {
    children: ReactNode;
}

export const DynamicMenuProvider = ({ children }: DynamicMenuProviderProps) => {
    const [albums, setAlbums] = useState<DynamicAlbumItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const loadAlbums = async () => {
            try {
                setIsLoading(true);
                const collection = await getCollections();
                setAlbums(collection.set.map(({id, title}: FlickrCollectionSet) => ({
                    title,
                    path: `/albums/${id}`,
                    photosetId: id,
                })));
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to load albums'));
            } finally {
                setIsLoading(false);
            }
        };

        loadAlbums();
    }, []);

    return (
        <DynamicMenuContext.Provider value={{ albums, isLoading, error }}>
            {children}
        </DynamicMenuContext.Provider>
    );
};
