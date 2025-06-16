import { Book } from "components/gatza/Book/Book";
import { Gatza, MakingOf } from "components/PageWithGallery/PageWithGallery";
import { Info } from "components/gatza/Info/Info";
import { News } from "components/gatza/News/News";
import { RouteInfo } from "./Routes";

export const GATZA_ROUTES: RouteInfo[] = [
    {
        id: 'gatza',
        component: Gatza,
        path: '/gatza',
        children: [
            {
                id: 'book',
                component: Book,
                path: '/gatza/book',
            },
            {
                id: 'news',
                component: News,
                path: '/gatza/news',
            },
            {
                id: 'makingof',
                component: MakingOf,
                path: '/gatza/makingof',
            },
            {
                id: 'info',
                component: Info,
                path: '/gatza/info',
            }
        ]
    }];

export interface MenuItem {
    menuItem: string;
    path: string;
}
export const GATZA_MENU_ITEMS: MenuItem[] = [
    { menuItem: 'menu.gatza', path: '/gatza' },
    { menuItem: 'menu.gatza.book', path: '/gatza/book' },
    { menuItem: 'menu.gatza.makingof', path: '/gatza/makingof' },
    { menuItem: 'menu.gatza.news', path: '/gatza/news' },
    { menuItem: 'menu.gatza.info', path: '/gatza/info' },
]