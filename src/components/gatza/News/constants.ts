interface NewsData {
    videoUrl: string;
    news: {
        title: string;
        imgSrc: string;
        src?: string;
        id?: string;
    }[];
}

export const NEWS_DATA: NewsData = {
    videoUrl: 'https://www.youtube.com/embed/-B3ezMdT1JQ',
    news: [
        {
            title: '2014/10/03',
            imgSrc: 'https://live.staticflickr.com/65535/54404437883_1443875891_c.jpg',
            src: 'https://live.staticflickr.com/65535/54403324572_ba49de9171_c.jpg',
            id: '31764384476',
        },
        {
            title: '2015/05/15',
            imgSrc: 'https://live.staticflickr.com/65535/54404437868_bf409c9511_c.jpg',
            src: 'https://live.staticflickr.com/65535/54404437908_1ab8ff812a_c.jpg',
            id: '',
        },
        {
            title: '2015/05/29',
            imgSrc: 'https://live.staticflickr.com/65535/54404437863_e2d75c4bf8_c.jpg',
            src: 'https://live.staticflickr.com/65535/54404437903_aa2ca9da53_c.jpg',
            id: '31685194221',
        },
        {
            title: '2015/06/04',
            imgSrc: 'https://live.staticflickr.com/65535/54404381449_bdd22236bd_c.jpg',
            src: 'https://live.staticflickr.com/65535/54404437898_2af08befd3_c.jpg',
            id: '31432955160',
        },
        {
            title: '2015/06/05',
            imgSrc: 'https://live.staticflickr.com/65535/54404381479_60bf1be9ea_c.jpg',
            src: 'https://live.staticflickr.com/65535/54404205416_e117585785_h.jpg',
            id: '31801382175',
        },
        {
            title: '2015/06/07',
            imgSrc: 'https://live.staticflickr.com/65535/54404573095_f7bdf68af3_c.jpg',
            src: 'https://live.staticflickr.com/65535/54403324602_073a9d612d_c.jpg',
            id: '31801386475',
        },
    ],
};