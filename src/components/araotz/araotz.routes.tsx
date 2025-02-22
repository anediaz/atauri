import { LocalizedRoute } from "LocalizedRoute"
import { Route } from "react-router-dom"
import { Araotz } from "./Araotz"
import { MakingOf } from "./MakingOf"
import { Info } from "./Info"

export const ARAOTZ_ROUTES =
  <Route path="/:lang/araotz">
    <Route path="/:lang/araotz" element={<LocalizedRoute><Araotz /></LocalizedRoute>} />
    <Route path="/:lang/araotz/makingof" element={<LocalizedRoute><MakingOf /></LocalizedRoute>} />
    <Route path="/:lang/araotz/info" element={<LocalizedRoute><Info /></LocalizedRoute>} />
  </Route>;