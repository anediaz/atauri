import { useTranslation } from 'react-i18next';

import './footer.css';

const AUTHOR = 'Ane Diaz de Tuesta';
const WEBSITE = 'http://www.anediaz.com';

export const Footer = () => {
  const [t] = useTranslation();

  const clickableText = (
    <a aria-label='click-footer-ane-website' href={WEBSITE} target="_blank" rel="noopener noreferrer" key={2}>
      {AUTHOR}
    </a>
  );
  const footerText = t('footer.webSiteInfo').split('$author');
  return (
    <footer className="footer">
      <div key={1}>{footerText[0]}</div>
      {clickableText}
      <div key={3}>{footerText[1]}</div>
    </footer>
  );
};
