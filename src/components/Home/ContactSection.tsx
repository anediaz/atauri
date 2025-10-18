import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './contact-section.css';

export const ContactSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [t] = useTranslation();

  const contactItems = [
    {
      label: t("page.contact.name"),
      value: "Joxefe Diaz de Tuesta"
    },
    {
      label: t("page.contact.phone"),
      value: "+34 677 536 846",
      link: "tel:+34677536846"
    },
    {
      label: t("page.contact.email"),
      value: "arrasateargitan@gmail.com",
      link: "mailto:arrasateargitan@gmail.com"
    },
    {
      label: t("page.contact.website"),
      value: "atauri @ Flickr",
      link: "https://www.flickr.com/photos/atauri"
    }
  ];

  return (
    <div className="contact-section">
      <button 
        className={`contact-section__toggle ${isExpanded ? 'contact-section__toggle--expanded' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls="contact-info"
        aria-label={`click-contact-section-toggle-${isExpanded ? 'collapse' : 'expand'}`}
      >
        <span className="contact-section__toggle-text">
          {t("page.contact.title")}
        </span>
        <span className={`contact-section__toggle-icon ${isExpanded ? 'contact-section__toggle-icon--expanded' : ''}`}>
          ▼
        </span>
      </button>

      <div 
        id="contact-info"
        className={`contact-section__content ${isExpanded ? 'contact-section__content--expanded' : ''}`}
        aria-hidden={!isExpanded}
      >
        <div className="contact-section__items">
          <p className="contact-section__description">
            {t("page.contact.description")}
          </p>
          
          {contactItems.map((item, index) => (
            <div key={index} className="contact-section__item">
              <span className="contact-section__label">{item.label}:</span>
              {item.link ? (
                <a 
                  href={item.link}
                  className="contact-section__link"
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {item.value}
                </a>
              ) : (
                <span className="contact-section__value">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};