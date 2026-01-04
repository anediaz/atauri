import { RouteInfo } from "./Routes";
import { DynamicAlbum } from "components/DynamicAlbum/DynamicAlbum";

export const ALBUMS_ROUTES: RouteInfo[] = [
    {
        id: 'dynamic-album',
        component: DynamicAlbum,
        path: '/albums/:photosetId'
    }
];
