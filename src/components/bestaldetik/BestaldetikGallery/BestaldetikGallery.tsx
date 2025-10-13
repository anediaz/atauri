import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePhotos } from 'hooks/usePhotos';
import { AppLanguage } from 'app.constants';
import { PhotoProps, Gallery } from 'react-ikusi';
import { PAGE_WITH_GALLERY } from 'components/PageWithGallery/constants';
import './BestaldetikGallery.css';

interface BestaldetikGalleryProps {
  language: AppLanguage;
}

export const BestaldetikGallery: React.FC<BestaldetikGalleryProps> = ({ language }) => {
  const navigate = useNavigate();
  const { pageType, photosetId: photosetIdFromConfig, configurations } = PAGE_WITH_GALLERY['bestaldetik'];
  const { photos, isLoading, isPhotosFailed, refetch } = usePhotos({ pageType, photosetId: photosetIdFromConfig });
  const ref = useRef<HTMLDivElement>(null);

  console.log('BestaldetikGallery - photos:', photos);
  console.log('BestaldetikGallery - isLoading:', isLoading);
  console.log('BestaldetikGallery - isPhotosFailed:', isPhotosFailed);

  const handlePhotoClick = (photo: PhotoProps) => {
    console.log('Photo clicked:', photo);
    console.log('Navigating to:', `/${language}/bestetik/${photo.id}`);
    // Prevent the default lightbox behavior and navigate instead
    navigate(`/${language}/bestetik/${photo.id}`);
  };

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
          onClickPhoto={handlePhotoClick}
          lightboxProps={{ isEnabled: false }}
        />
      )}
    </div>
  );
};