import { useTranslation } from 'react-i18next';
import './book.css';

const IMG_SRC = "https://live.staticflickr.com/4318/36020530925_10b2466986_h.jpg";
const URL = 'http://e.issuu.com/embed.html#29935047/49686996';

export const Book = () => {
    const [t] = useTranslation();
    
  return (<div className="book">
    <a href={URL} target="_blank" rel="noopener noreferrer">
      <img
        src={IMG_SRC}
        title={t('page.gatza.book.title')}
        alt={t('page.gatza.book.alt')}
        className="content-image"
      />
    </a>
  </div>);
}