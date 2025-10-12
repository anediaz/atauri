import { RouteInfo } from "./Routes";
import { Bestaldetik } from "components/PageWithGallery/PageWithGallery";

export const BESTALDETIK_ROUTES: RouteInfo[] = [
    {
        id: 'bestaldetik',
        component: Bestaldetik,
        path: '/bestaldetik'
    }];

export const BESTALDETIK_MENU_ITEMS = [
    { menuItem: 'menu.bestaldetik', path: '/bestaldetik' }
];