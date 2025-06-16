import { PageWithGallery } from "./page-with-gallery.types";

export const PAGE_WITH_GALLERY: PageWithGallery = {
    'gatza': {
        photosetId: '72157670317433475',
        configurations: [
            { minWidth: 1024, cols: 12, margin: 2 },
            {
                minWidth: 480, maxWidth: 1023, cols: 7, margin: 1,
            },
            { maxWidth: 479, cols: 4, margin: 1 },
        ],
        pageType: 'gatza',
    },
    'gatza-makingof': {
        photosetId: '72157669315421710',
        configurations: [
            { minWidth: 1024, cols: 7, margin: 5 },
            {
                minWidth: 480, maxWidth: 1023, cols: 7, margin: 1,
            },
            { maxWidth: 479, cols: 4, margin: 1 },
        ],
        pageType: 'gatza',
    },
    'araotz-makingof': {
        photosetId: '72157714754671087',
        configurations: [
            { minWidth: 1024, cols: 7, margin: 5 },
            {
                minWidth: 480, maxWidth: 1023, cols: 7, margin: 1,
            },
            { maxWidth: 479, cols: 4, margin: 1 },
        ],
        pageType: 'araotz',

    }
}