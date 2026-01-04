import { ConfigurationProps } from "react-ikusi";
import { PageType } from "utils/constants";
interface PageWithGalleryInfo {
    photosetId: string | string[];
    configurations: ConfigurationProps[];
    pageType: PageType;
}

export type GalleryName = 'gatza' | 'gatza-makingof' | 'araotz' | 'araotz-makingof' | 'bestaldetik' | 'dynamic-album';
export type PageWithGallery = Record<GalleryName, PageWithGalleryInfo>;