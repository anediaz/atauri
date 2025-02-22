import { Book } from "./Book";
import { Gatza } from "./Gatza";
import { Info } from "./Info";
import { MakingOf } from "./MakingOf";
import { News } from "./News";

export const paths = [
    '/:lang/gatza', '/:lang/gatza/book', '/:lang/gatza/news', '/:lang/gatza/makingof', '/:lang/gatza/info'
];

export const routeInfos = {
    'gatza': {
        'component': Gatza,
        'path': '/:lang/gatza',
        'isHome': true
    },
    'book': {
        'component': Book,
        'path': '/:lang/gatza/book',
    },
    'news': {
        'component': News,
        'path': '/:lang/gatza/news',
    },
    'makingof': {
        'component': MakingOf,
        'path': '/:lang/gatza/makingof',
    },
    'info': {
        'component': Info,
        'path': '/:lang/gatza/info',
    }
}