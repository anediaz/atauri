import { AppLanguage, DEFAULT_LANGUAGE, isAppLanguage } from "app.constants";
import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { buildRoute, buildRoutes } from "router/Routes";
import { BASE_PATH, ROUTES } from "router/router.constants";
import './i18n/i18n';
import { AppLayout } from "AppLayout/AppLayout";
import { useTranslation } from "react-i18next";
import { useLocaleFromPathname } from "hooks/useLocaleFromPathname";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15 * 60 * 1000, // 15 minutes - photos don't change often
      gcTime: 60 * 60 * 1000,    // 1 hour - keep in memory
      refetchOnWindowFocus: false, // Don't refetch when window gains focus
      retry: 2, // Retry failed requests twice
      refetchOnReconnect: true, // Refetch when internet reconnects
    },
  },
});

const LocalizedRouter = () => {
  const { i18n } = useTranslation();
  const locale = useLocaleFromPathname();
  const [currentLanguage, setCurrentLanguage] = useState<AppLanguage>(locale as AppLanguage);

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
            {buildRoutes(ROUTES.BESTALDETIK_ROUTES)}
            {buildRoute(ROUTES.ERROR_ROUTE)}
          </Route>
          <Route path='*' element={<Navigate to={`/${DEFAULT_LANGUAGE}`} />} />
        </Routes>
      </AppLayout>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<div>suspense fallback</div>}>
      <BrowserRouter basename="/atauri">
          <LocalizedRouter />
      </BrowserRouter>
    </Suspense>
  </QueryClientProvider>
);

export default App;
