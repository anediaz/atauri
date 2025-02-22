import { APP_LANGUAGES } from "app.constants"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"

const LanguageSelector = ({ currentLang }: { currentLang: string }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const isActive = (l: string) => {
        return l === currentLang;
    };

    return <div className="LanguageSelector" role="menuitem">
      <ul>
        {APP_LANGUAGES.map((lang) => (
          <li
            title={lang}
            key={lang}
            role="menuitem"
            onKeyDown={() => { }}
            aria-label={`language-item-${lang}`}
            style={{ color: isActive(lang) ? 'red' : 'black', cursor: 'pointer' }}
                onClick={() => {
                const path = pathname.substring(3);
                navigate(`/${lang}${path}`);
             }}    
          >
            {lang}
          </li>
        ))}
      </ul>
    </div>
}

export const Menu = () => {
    const {lang = 'eu'} = useParams();
    return (
        <div role='navigation' style={{ display: "flex", flexDirection: "column", padding:"30px 10px", border: '1px solid black' }}>
            <h3>Atauri</h3>
            <LanguageSelector currentLang={lang} />
            <Link to={`/${lang}/gatza`}>Gatza</Link>
            <Link to={`/${lang}/gatza/book`}>Liburua</Link>
            <Link to={`/${lang}/gatza/makingof`}>Making of</Link>
            <Link to={`/${lang}/gatza/news`}>Berriak</Link>
            <Link to={`/${lang}/gatza/info`}>Info</Link>
            <Link to={`/${lang}/araotz`}>Araotz</Link>
            <Link to={`/${lang}/araotz/makingof`}>Making of</Link>
            <Link to={`/${lang}/araotz/info`}>Info</Link>
        </div>
    )
}