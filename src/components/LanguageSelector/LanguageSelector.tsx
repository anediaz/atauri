import { APP_LANGUAGES, AppLanguage, DEFAULT_LANGUAGE } from 'app.constants';
import './language-selector.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

interface LanguageSelectorProps {
  handleLanguageClick: (v:AppLanguage) => void;
}

export const LanguageSelector = ({ handleLanguageClick }: LanguageSelectorProps) => {
  const { lang = DEFAULT_LANGUAGE } = useParams();
  const getClassName = (language: AppLanguage) => `language ${language} ${lang === language ? 'active' : ''}`;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="language-selector" role="menuitem">
      <ul>
        {APP_LANGUAGES.map((language) => (
          <li
            key={language}
            title={language}
            role="menuitem"
            aria-label={`language-item-${language}`}
            className={getClassName(language as AppLanguage)}
            onClick={() => {
              const path = pathname.substring(3);
              handleLanguageClick(language);
              navigate(`/${language}${path}`);
              
            }}
            onKeyDown={() => { }}
          >
            {language}
          </li>
        ))}
      </ul>
    </div>
  );
};
