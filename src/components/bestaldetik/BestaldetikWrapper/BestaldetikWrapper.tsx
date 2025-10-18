import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { PhotoDetail } from '../PhotoDetail/PhotoDetail';
import { BestaldetikGallery } from '../BestaldetikGallery/BestaldetikGallery';
import { AppLanguage } from 'app.constants';
import { useLocaleFromPathname } from 'hooks/useLocaleFromPathname';

export const BestaldetikWrapper: React.FC = () => {
  const { photoId } = useParams<{ photoId: string }>();
  const location = useLocation();
  const language = useLocaleFromPathname() as AppLanguage;

  if (photoId) {
    return <PhotoDetail language={language} />;
  }

  return <BestaldetikGallery language={language} />;
};