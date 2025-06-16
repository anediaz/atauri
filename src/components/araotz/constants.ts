import { ConfigurationProps } from "react-ikusi";

export type PageWithGalleryType = 'makingof';
interface PageWithGalleryInfo {
    photosetId: string;
    configurations: ConfigurationProps[]
}

export const PAGE_WITH_GALLERY: Record<PageWithGalleryType, PageWithGalleryInfo> = {
    'makingof': {
        photosetId: '72157714754671087',
        configurations: [
            { minWidth: 1024, cols: 7, margin: 5 },
            {
                minWidth: 480, maxWidth: 1023, cols: 7, margin: 1,
            },
            { maxWidth: 479, cols: 4, margin: 1 },
        ]
    }
}
