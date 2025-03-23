import { useTranslation } from "react-i18next";
import './info.css';

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
      </div>
    </div>
  );
}