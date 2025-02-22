import { LocalizedRoute } from "LocalizedRoute";
import { Route } from "react-router-dom";
import { Gatza } from "./Gatza";
import { MakingOf } from "./MakingOf";
import { Book } from "./Book";
import { News } from "./News";
import { Info } from "./Info";


export const GATZA_ROUTES =
    <Route path="/:lang/gatza">
        <Route path="/:lang/gatza" element={<LocalizedRoute><Gatza /></LocalizedRoute>} />
        <Route path="/:lang/gatza/book" element={<LocalizedRoute><Book /></LocalizedRoute>} />
        <Route path="/:lang/gatza/makingof" element={<LocalizedRoute><MakingOf /></LocalizedRoute>} />
        <Route path="/:lang/gatza/news" element={<LocalizedRoute><News /></LocalizedRoute>} />
        <Route path="/:lang/gatza/info" element={<LocalizedRoute><Info /></LocalizedRoute>} />
    </Route>;