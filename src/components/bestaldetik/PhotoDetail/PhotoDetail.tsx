import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePhotos } from 'hooks/usePhotos';
import { TransformedPhotoProps } from 'utils/transform-flickr-result';
import { AppLanguage } from 'app.constants';
import { useTranslation } from 'react-i18next';
import { PAGE_WITH_GALLERY } from 'components/PageWithGallery/constants';
import photoTexts from '../photoTexts.json';
import './PhotoDetail.css';

interface PhotoTextData {
  name: string;
  birthDate: string;
  birthPlace: string;
  text: {
    title: string;
    content?: string;
    text?: string;
  }[];
}

interface PhotoDetailProps {
  language: AppLanguage;
}

export const PhotoDetail: React.FC<PhotoDetailProps> = ({ language }) => {
  const { photoId } = useParams<{ photoId: string }>();
  const navigate = useNavigate();
  const [t] = useTranslation();
  const [photoData, setPhotoData] = useState<PhotoTextData | null>(null);
  const [currentPhoto, setCurrentPhoto] = useState<TransformedPhotoProps | null>(null);
  
  // Get photos from the bestaldetik gallery to find the clicked photo
  const { pageType, photosetId: photosetIdFromConfig } = PAGE_WITH_GALLERY['bestaldetik'];
  const { photos } = usePhotos({ 
    pageType, 
    photosetId: photosetIdFromConfig 
  });

  useEffect(() => {
    // Find the current photo by ID
    const photo = photos.find(p => p.id === photoId);
    if (photo) {
      setCurrentPhoto(photo);
    }
  }, [photos, photoId]);

  useEffect(() => {
    // Load photo text data from imported JSON
    if (photoId && photoTexts[photoId]) {
      setPhotoData(photoTexts[photoId]);
    } else {
      setPhotoData(null);
    }
  }, [photoId]);

  const handleBackClick = () => {
    navigate(`/${language}/bestaldetik`);
  };


  if (!photoId) {
    return (
      <div className="photo-detail">
        <div className="photo-detail__loading">
          No photo ID provided
        </div>
      </div>
    );
  }

  if (!currentPhoto && photos.length === 0) {
    return (
      <div className="photo-detail">
        <div className="photo-detail__header">
          <button 
            className="photo-detail__back-button" 
            onClick={handleBackClick}
            aria-label={t('back')}
          >
            ← {t('back')}
          </button>
        </div>
        <div className="photo-detail__loading">
          <div className="photo-detail__spinner"></div>
        </div>
      </div>
    );
  }

  if (!currentPhoto && photos.length > 0) {
    return (
      <div className="photo-detail">
        <div className="photo-detail__header">
          <button 
            className="photo-detail__back-button" 
            onClick={handleBackClick}
            aria-label={t('back')}
          >
            ← {t('back')}
          </button>
        </div>
        <div className="photo-detail__loading">
          Photo not found
        </div>
      </div>
    );
  }

  
  return (
    <div className="photo-detail">
      <div className="photo-detail__header">
        <button 
          className="photo-detail__back-button" 
          onClick={handleBackClick}
          aria-label={t('back', 'Back')}
        >
          ← {t('back', 'Back')}
        </button>
      </div>

      <div className="photo-detail__content">
        <div className="photo-detail__image-container">
          <img 
            src={currentPhoto.bigSrc || currentPhoto.src} 
            alt={currentPhoto.title}
            className="photo-detail__image"
          />
        </div>

        {photoData ? (
          <div className="photo-detail__info">
            <div className="photo-detail__person-info">
              <h1 className="photo-detail__name">{photoData.name}</h1>
              <p className="photo-detail__birth-info">
                ({photoData.birthDate}, {photoData.birthPlace})
              </p>
            </div>

            <div className="photo-detail__text-sections">
              {photoData.text.map((section, index) => (
                <div key={index} className="photo-detail__text-section">
                  <h2 className="photo-detail__section-title">
                    {section.title}
                  </h2>
                  <div className="photo-detail__section-content">
                    {(section.content || section.text || '').split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="photo-detail__paragraph">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="photo-detail__info">
            <div className="photo-detail__person-info">
              <h1 className="photo-detail__name">{currentPhoto.title}</h1>
              <p className="photo-detail__birth-info">
                Photo ID: {photoId}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};