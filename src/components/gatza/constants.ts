import { ConfigurationProps } from "react-ikusi";

export type PageWithGalleryType = 'gatza' | 'makingof';
interface PageWithGalleryInfo {
    photosetId: string;
    configurations: ConfigurationProps[]
}

export const PAGE_WITH_GALLERY: Record<PageWithGalleryType, PageWithGalleryInfo> = {
    'gatza': {
        photosetId: '72157670317433475',
        configurations: [
            { minWidth: 1024, cols: 12, margin: 2 },
            {
                minWidth: 480, maxWidth: 1023, cols: 7, margin: 1,
            },
            { maxWidth: 479, cols: 4, margin: 1 },
        ]
    },
    'makingof': {
        photosetId: '72157669315421710',
        configurations: [
            { minWidth: 1024, cols: 7, margin: 5 },
            {
                minWidth: 480, maxWidth: 1023, cols: 7, margin: 1,
            },
            { maxWidth: 479, cols: 4, margin: 1 },
        ]
    }
}
