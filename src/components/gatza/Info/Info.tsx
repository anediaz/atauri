import { useTranslation } from "react-i18next";
import { InfoPage } from "components/shared/InfoPage/InfoPage";

export const Info = () => {
  const [t] = useTranslation();

  const paragraphs = [
    t("page.gatza.info.text.p1"),
    t("page.gatza.info.text.p2"),
    t("page.gatza.info.text.p3"),
    t("page.gatza.info.text.p4")
  ];

  return (
    <InfoPage 
      title={t("page.gatza")}
      paragraphs={paragraphs}
    />
  );
}