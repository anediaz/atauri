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
            { minWidth: 1024, cols: 7, margin: 3 },
            {
                minWidth: 480, maxWidth: 1023, cols: 7, margin: 1,
            },
            { maxWidth: 479, cols: 4, margin: 1 },
        ],
        pageType: 'gatza',
    },
    'araotz': {
        photosetId: ['72157714537142516', '72157714538758167', '72157714537981293', '72157714536787291', '72157714449958063', '72157714447484653', '72157714447963992', '72157714446231096', '72157714446217726', '72157714447885987', '72157714447222953', '72157714447041908', '72157714445877131', '72157714445841101', '72157714447472112', '72157714445739926', '72157714447388062', '72157714304397326', '72157714303130513', '72157714301942166', '72157713926881598'],
        configurations: [
            { minWidth: 480, cols: 3, margin: 1 },
            { maxWidth: 479, cols: 2, margin: 1 },
        ],
        pageType: 'araotz',

    },
    'araotz-makingof': {
        photosetId: '72157714754671087',
        configurations: [
            { minWidth: 1024, cols: 7, margin: 3 },
            {
                minWidth: 480, maxWidth: 1023, cols: 7, margin: 1,
            },
            { maxWidth: 479, cols: 4, margin: 1 },
        ],
        pageType: 'araotz',

    }
}