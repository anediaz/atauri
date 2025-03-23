
import { NEWS_DATA } from './constants';
import './news.css';

export const News = () => (
  <div className="news">
    <div className="header" />
    <div className="video-displayer">
      <iframe
        src={NEWS_DATA.videoUrl}
        frameBorder="0"
        allowFullScreen
        title="videoDisplayer"
        className="content"
      />
    </div>
    <div className="clickable-media">
      <div className="content">
        {NEWS_DATA.news.map(({ id, imgSrc, src }) => (
          <img
            src={imgSrc}
            alt={`media-${id}`}
            className="article"
            onClick={() => window.open(src, '_blank')}
            key={id}
          />
        ))}
      </div>
    </div>
  </div>
);