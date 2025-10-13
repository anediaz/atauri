import { RouteInfo } from "./Routes";
import { BestaldetikWrapper } from "components/bestaldetik/BestaldetikWrapper/BestaldetikWrapper";
import { Hitzaurrea } from "components/bestaldetik/Hitzaurrea/Hitzaurrea";

export const BESTALDETIK_ROUTES: RouteInfo[] = [
    {
        id: 'bestaldetik',
        component: BestaldetikWrapper,
        path: '/bestaldetik'
    },
    {
        id: 'bestaldetik-hitzaurrea',
        component: Hitzaurrea,
        path: '/bestaldetik/hitzaurrea'
    },
    {
        id: 'bestetik-photo',
        component: BestaldetikWrapper,
        path: '/bestetik/:photoId'
    }];

export const BESTALDETIK_MENU_ITEMS = [
    { menuItem: 'menu.bestaldetik', path: '/bestaldetik' },
    { menuItem: 'menu.bestaldetik.hitzaurrea', path: '/bestaldetik/hitzaurrea' }
];