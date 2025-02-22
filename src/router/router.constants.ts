import { GeneralError } from "components/GeneralError"
import { Home } from "components/Home"
import { RouteInfo } from "router/Routes"
import { ARAOTZ_MENU_ITEMS, ARAOTZ_ROUTES } from "router/araotz.constants";
import { GATZA_MENU_ITEMS, GATZA_ROUTES } from "router/gatza.constants";

export const BASE_PATH = '/:lang'

const HOME_ROUTE: RouteInfo = {
    id: 'home', path: '', component: Home
}

const ERROR_ROUTE: RouteInfo = {
    id: 'error', path: '/*', component: GeneralError
}

export const ROUTES = { ARAOTZ_ROUTES, GATZA_ROUTES, HOME_ROUTE, ERROR_ROUTE };
export const MENU_ITEMS = { GATZA_MENU_ITEMS, ARAOTZ_MENU_ITEMS };