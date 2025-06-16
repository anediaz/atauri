import { Araotz } from "components/araotz/Araotz";
import { Info } from "components/araotz/Info/Info";
import { RouteInfo } from "./Routes";
import { MakingOfAraotz } from "components/PageWithGallery/PageWithGallery";

export const ARAOTZ_ROUTES: RouteInfo[] = [
    {
        id: 'araotz',
        component: Araotz,
        path: '/araotz',
        children: [
            {
                id: 'makingof',
                component: MakingOfAraotz,
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


