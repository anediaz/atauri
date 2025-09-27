import { useTranslation } from "react-i18next";
import { InfoPage } from "components/shared/InfoPage/InfoPage";

export const Info = () => {
  const [t] = useTranslation();

  const paragraphs = [
    t("page.araotz.info.text.p1"),
    t("page.araotz.info.text.p2"),
    t("page.araotz.info.text.p3")
  ];

  return (
    <InfoPage 
      title={t("page.araotz")}
      paragraphs={paragraphs}
    />
  );
}