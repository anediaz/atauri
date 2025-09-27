import React from 'react';
import { useTranslation } from 'react-i18next';
import { InfoPage } from 'components/shared/InfoPage/InfoPage';

export const Contact: React.FC = () => {
  const [t] = useTranslation();

  const contactInfo = {
    title: t("page.contact.title"),
    items: [
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
    ]
  };

  const paragraphs = [
    t("page.contact.description")
  ];

  return (
    <InfoPage 
      paragraphs={paragraphs}
      contactInfo={contactInfo}
    />
  );
};