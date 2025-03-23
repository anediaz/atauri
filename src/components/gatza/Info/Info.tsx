import { useTranslation } from "react-i18next";
import './info.css';

export const MOREINFO_DATA = {
  name: 'Joxefe Diaz de Tuesta',
  phone: '+34 677 536 846',
  mail: 'arrasateargitan@gmail.com',
  site: 'https://www.flickr.com/photos/atauri',
};

export const Info = () => {
    const [t] = useTranslation();
    return (
    <div className="info">
      <div className="content">
        <div className="text">
            <p>{t("page.gatza.info.text.p1")}</p>
            <p>{t("page.gatza.info.text.p2")}</p>
            <p>{t("page.gatza.info.text.p3")}</p>
            <p>{t("page.gatza.info.text.p4")}</p>
        </div>

        <div className="contact">
          <div className="title">{t("page.gatza.info.contact.title")}</div>
          <div className="line">
            <div>{MOREINFO_DATA.name}</div>
            <div>{MOREINFO_DATA.phone}</div>
          </div>
          <div className="line">
            <div>
              {t("page.gatza.info.contact.mail")}
              :
              {' '}
              <a href={`mailto:${MOREINFO_DATA.mail}`} target="_top">
                {MOREINFO_DATA.mail}
              </a>
            </div>
            <div>
              <a href={MOREINFO_DATA.site} target="_blank" rel="noopener noreferrer">
                Flickr
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}