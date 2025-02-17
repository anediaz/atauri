import { AppLayout } from "AppLayout";
import { GeneralError } from "components/GeneralError";
import { Home } from "components/Home";
import { LocalizedRoute } from "LocalizedRoute";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Gatza } from "components/Gatza";
import { Araotz } from "components/Araotz";

const LocalizedRouter = () => {
  return (
    <div className="App">
      <Routes>
        <Route key="root" path="/:lang">
          <Route key="root" path="/:lang" element={<LocalizedRoute><Home /></LocalizedRoute>} />
          <Route path="/:lang/gatza" element={<LocalizedRoute><Gatza /></LocalizedRoute>} />
          <Route path="/:lang/araotz" element={<LocalizedRoute><Araotz /></LocalizedRoute>} />
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
      <AppLayout>
        <LocalizedRouter />
      </AppLayout>
    </BrowserRouter>
  </Suspense>
);

export default App;
