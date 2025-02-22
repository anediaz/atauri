import { DEFAULT_LANGUAGE } from "app.constants";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { buildRoute, buildRoutes } from "router/Routes";
import { BASE_PATH, ROUTES } from "router/router.constants";


const LocalizedRouter = () => {
  return (
    <div className="App">
      <Routes>
        <Route key="root" path={BASE_PATH}>
          {buildRoute(ROUTES.HOME_ROUTE)}
          {buildRoutes(ROUTES.GATZA_ROUTES)}
          {buildRoutes(ROUTES.ARAOTZ_ROUTES)}
          {buildRoute(ROUTES.ERROR_ROUTE)}
        </Route>
        <Route path='*' element={<Navigate to={`/${DEFAULT_LANGUAGE}`} />} />
        </Routes>
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
