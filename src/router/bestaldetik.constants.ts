import { RouteInfo } from "./Routes";
import { BestaldetikWrapper } from "components/bestaldetik/BestaldetikWrapper/BestaldetikWrapper";

export const BESTALDETIK_ROUTES: RouteInfo[] = [
    {
        id: 'bestaldetik',
        component: BestaldetikWrapper,
        path: '/bestaldetik'
    },
    {
        id: 'bestetik-photo',
        component: BestaldetikWrapper,
        path: '/bestetik/:photoId'
    }];

export const BESTALDETIK_MENU_ITEMS = [
    { menuItem: 'menu.bestaldetik', path: '/bestaldetik' }
];