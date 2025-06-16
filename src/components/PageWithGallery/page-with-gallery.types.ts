import { ConfigurationProps } from "react-ikusi";
import { PageType } from "utils/constants";
interface PageWithGalleryInfo {
    photosetId: string;
    configurations: ConfigurationProps[];
    pageType: PageType;
}

export type GalleryName = 'gatza' | 'gatza-makingof' | 'araotz-makingof';
export type PageWithGallery = Record<GalleryName, PageWithGalleryInfo>;