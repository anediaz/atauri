import { Araotz } from "components/araotz/Araotz";
import { Info } from "components/araotz/Info";
import { MakingOf } from "components/araotz/MakingOf";
import { RouteInfo } from "./Routes";

export const ARAOTZ_ROUTES: RouteInfo[] = [
    {
        id: 'araotz',
        component: Araotz,
        path: '/araotz',
        children: [
            {
                id: 'makingof',
                component: MakingOf,
                path: '/araotz/makingof',
            },
            {
                id: 'info',
                component: Info,
                path: '/araotz/info',
            }
        ]
    }];
export const ARAOTZ_MENU_ITEMS = [
    { menuItem: 'menu.araotz', path: '/araotz' },
    { menuItem: 'menu.araotz.makingof', path: '/araotz/makingof' },
    { menuItem: 'menu.araotz.info', path: '/araotz/info' },
]


