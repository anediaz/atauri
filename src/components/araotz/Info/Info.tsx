import { useTranslation } from "react-i18next";
import './info.css';

export const Info = () => {
  const [t] = useTranslation();

    return (
        <div className="info-wrapper">
        <div className="info-content">
          <div className="info-text">
            <p>{t("page.araotz.info.text.p1")}</p>
            <p>{t("page.araotz.info.text.p2")}</p>
            <p>{t("page.araotz.info.text.p3")}</p>
          </div>
        </div>
      </div>
    )
}