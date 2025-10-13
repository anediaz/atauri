import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hitzaurrea.css';

export const Hitzaurrea: React.FC = () => {
  const { t } = useTranslation();

  // Function to split text by \n\n and create paragraphs
  const renderText = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} className="hitzaurrea__paragraph">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="hitzaurrea">
      <div className="hitzaurrea__container">
        <div className="hitzaurrea__content">
          <h1 className="hitzaurrea__title">
            {t('page.bestaldetik.hitzaurrea.title')}
          </h1>
          
          <div className="hitzaurrea__text">
            {renderText(t('page.bestaldetik.hitzaurrea.text'))}
          </div>
        </div>
      </div>
    </div>
  );
};