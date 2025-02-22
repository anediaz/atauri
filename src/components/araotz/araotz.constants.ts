import { Araotz } from "./Araotz";
import { Info } from "./Info";
import { MakingOf } from "./MakingOf";

export const paths = [
    '/:lang/araotz', '/:lang/araotz/makingof', '/:lang/araotz/info'
];

export const routeInfos = {
    'araotz': {
        'component': Araotz,
        'path': '/:lang/araotz',
        'isHome': true
    },
    'makingof': {
        'component': MakingOf,
        'path': '/:lang/araotz/makingof',
    },
    'info': {
        'component': Info,
        'path': '/:lang/araotz/info',
    }
}


