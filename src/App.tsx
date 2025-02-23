import { AppLanguage, DEFAULT_LANGUAGE, isAppLanguage } from "app.constants";
import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate, useParams } from "react-router-dom";
import { buildRoute, buildRoutes } from "router/Routes";
import { BASE_PATH, ROUTES } from "router/router.constants";
import './i18n/i18n';
import { AppLayout } from "AppLayout/AppLayout";
import { useTranslation } from "react-i18next";


const LocalizedRouter = () => {
    const { i18n } = useTranslation();
    const { locale = DEFAULT_LANGUAGE } = useParams<AppLanguage>();
    const [currentLanguage, setCurrentLanguage] = useState<AppLanguage>(locale);

    useEffect(() => {
        i18n.changeLanguage(isAppLanguage(locale) ? locale : DEFAULT_LANGUAGE);
    }, [i18n, locale]);

    const updateLanguage = (lang: AppLanguage) => {
      i18n.changeLanguage(lang as AppLanguage);
      setCurrentLanguage(lang);
    }
  return (
    <div>
      <AppLayout setLanguage={updateLanguage} language={currentLanguage}>
        <Routes>
          <Route key="root" path={BASE_PATH}>
            {buildRoute(ROUTES.HOME_ROUTE)}
            {buildRoutes(ROUTES.GATZA_ROUTES)}
            {buildRoutes(ROUTES.ARAOTZ_ROUTES)}
            {buildRoute(ROUTES.ERROR_ROUTE)}
          </Route>
          <Route path='*' element={<Navigate to={`/${DEFAULT_LANGUAGE}`} />} />
        </Routes>
      </AppLayout>
    </div>
  );
}

const App = () => (
  <Suspense fallback={<div>suspense fallback</div>}>
    <BrowserRouter>
        <LocalizedRouter />
    </BrowserRouter>
  </Suspense>
);

export default App;
