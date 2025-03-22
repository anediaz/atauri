import { useTranslation } from 'react-i18next';
import bookImg from './book.png';
import './book.css';

const URL = 'http://e.issuu.com/embed.html#29935047/49686996';

export const Book = () => {
    const [t] = useTranslation();
    
  return (<div className="book">
    <a href={URL} target="_blank" rel="noopener noreferrer">
      <img
        src={bookImg}
        title={t('page.gatza.book.title')}
        alt={t('page.gatza.book.alt')}
        className="content-image"
      />
    </a>
  </div>);
}