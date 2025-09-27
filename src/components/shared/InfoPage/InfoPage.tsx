import React from 'react';
import './info-page.css';

interface InfoPageProps {
  title?: string;
  paragraphs: string[];
  contactInfo?: {
    title: string;
    items: Array<{
      label: string;
      value: string;
      link?: string;
    }>;
  };
}

export const InfoPage: React.FC<InfoPageProps> = ({ 
  title, 
  paragraphs, 
  contactInfo 
}) => {
  return (
    <div className="info-page">
      <div className="info-page__container">
        <div className="info-page__content">
          {title && (
            <h1 className="info-page__title">{title}</h1>
          )}
          
          <div className="info-page__text">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="info-page__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
          
          {contactInfo && (
            <div className="info-page__contact">
              <h2 className="info-page__contact-title">
                {contactInfo.title}
              </h2>
              <div className="info-page__contact-items">
                {contactInfo.items.map((item, index) => (
                  <div key={index} className="info-page__contact-item">
                    <span className="info-page__contact-label">
                      {item.label}:
                    </span>
                    {item.link ? (
                      <a 
                        href={item.link}
                        className="info-page__contact-link"
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="info-page__contact-value">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};