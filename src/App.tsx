import { ARAOTZ_ROUTES } from "components/araotz/araotz.routes";
import { GATZA_ROUTES } from "components/gatza/gatza.routes";
import { GeneralError } from "components/GeneralError";
import { Home } from "components/Home";
import { LocalizedRoute } from "LocalizedRoute";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const LocalizedRouter = () => {
  return (
    <div className="App">
      <Routes>
        <Route key="root" path="/:lang">
          <Route key="root" path="/:lang" element={<LocalizedRoute><Home /></LocalizedRoute>} />
          {GATZA_ROUTES}
          {ARAOTZ_ROUTES}
          <Route path="/:lang/*" element={<LocalizedRoute><GeneralError /></LocalizedRoute>} />
        </Route>
        <Route path='*' element={<Navigate to='/eu'/>} />
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
