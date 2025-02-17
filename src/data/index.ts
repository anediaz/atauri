import { AppLanguage } from "app.constants";
import { en } from "./en";
import { es } from "./es";
import { eu } from "./eu";
import { fr } from "./fr";

export const appStrings: Record<AppLanguage, Record<string, string>> = {
    en,
    es,
    eu,
    fr
}