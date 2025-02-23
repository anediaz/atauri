import { APP_LANGUAGES, AppLanguage } from 'app.constants';
import './language-selector.css';
import { useLocation, useNavigate } from 'react-router-dom';

interface LanguageSelectorProps {
  currentLanguage: AppLanguage
  handleLanguageClick: (v:AppLanguage) => void;
}

export const LanguageSelector = ({ currentLanguage, handleLanguageClick }: LanguageSelectorProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const getClassName = (langItem: AppLanguage) => `language ${langItem === currentLanguage ? 'active' : ''}`;

  return (
    <div className="language-selector" role="menuitem">
      <ul>
        {APP_LANGUAGES.map((langItem) => (
          <li
            key={langItem}
            title={langItem}
            role="menuitem"
            aria-label={`language-item-${langItem}`}
            className={getClassName(langItem as AppLanguage)}
            onClick={() => {
              const path = pathname.substring(3);
              handleLanguageClick(langItem);
              navigate(`/${langItem}${path}`);
              
            }}
            onKeyDown={() => { }}
          >
            {langItem}
          </li>
        ))}
      </ul>
    </div>
  );
};
