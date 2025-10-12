import { usePhotos } from "hooks/usePhotos";
import { useRef } from "react";
import { Gallery } from "react-ikusi";
import { GalleryName } from "./page-with-gallery.types";
import './PageWithGallery.css';
import { PAGE_WITH_GALLERY } from "./constants";

interface PageWithGalleryProps {
    galleryName: GalleryName;
    photosetIdProp?: string;
}

const PageWithGallery = ({ galleryName, photosetIdProp }: PageWithGalleryProps) => {
    const { pageType, photosetId: photosetIdFromConfig, configurations } = PAGE_WITH_GALLERY[galleryName];
    const photosetId = photosetIdProp || photosetIdFromConfig;
    const { photos, isLoading, isPhotosFailed, refetch } = usePhotos({ pageType, photosetId });
    const ref = useRef<HTMLDivElement>(null);

    const showContent = !isLoading && photos.length > 0;

    return (
        <div ref={ref} className={`page-with-gallery ${isLoading ? 'page-with-gallery--loading' : ''} ${showContent ? 'page-with-gallery--loaded' : ''}`}>
            {isLoading && (
                <div className="page-with-gallery__loading">
                    <div className="page-with-gallery__spinner"></div>
                </div>
            )}
            {isPhotosFailed && !isLoading && (
                <div className="page-with-gallery__error">
                    <p>Failed to load photos. Please try again later.</p>
                    <button 
                        onClick={() => refetch()} 
                        className="page-with-gallery__retry-button"
                    >
                        Retry
                    </button>
                </div>
            )}
            {showContent && (
                <Gallery
                    photos={photos}
                    configurations={configurations}
                />
            )}
        </div>
    )
}

export const Gatza = () => <PageWithGallery galleryName="gatza" />;
export const MakingOfGatza = () => <PageWithGallery galleryName="gatza-makingof" />;
export const Araotz = () => <PageWithGallery galleryName="araotz"/>;
export const MakingOfAraotz = () => <PageWithGallery galleryName="araotz-makingof"/>;
export const Bestaldetik = () => <PageWithGallery galleryName="bestaldetik"/>;
