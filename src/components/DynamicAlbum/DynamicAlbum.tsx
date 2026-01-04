import { useParams } from 'react-router-dom';
import { PageWithGallery } from '../PageWithGallery/PageWithGallery';

export const DynamicAlbum = () => {
    const { photosetId } = useParams<{ photosetId: string }>();

    if (!photosetId) {
        return <div>Album not found</div>;
    }

    return <PageWithGallery galleryName="dynamic-album" photosetIdProp={photosetId} />;
};
