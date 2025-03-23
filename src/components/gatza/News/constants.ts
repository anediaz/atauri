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
            imgSrc: 'https://live.staticflickr.com/65535/54405277180_646c9c1b82_c.jpg',
            src: 'https://live.staticflickr.com/5625/30669747305_983305db61_c.jpg',
            id: '54405277180',
        },
        {
            title: '2015/05/15',
            imgSrc: 'https://live.staticflickr.com/65535/54404027487_bc73e5f07f_c.jpg',
            src: 'https://live.staticflickr.com/674/31764384476_524ce46592_c.jpg',
            id: '54404027487',
        },
        {
            title: '2015/05/29',
            imgSrc: 'https://live.staticflickr.com/65535/54404906996_cf103bfe9c_c.jpg',
            src: 'https://live.staticflickr.com/255/31685194221_a330c9676a_c.jpg',
            id: '54404906996',
        },
        {
            title: '2015/06/04',
            imgSrc: 'https://live.staticflickr.com/65535/54405277205_a366a2aeda_c.jpg',
            src: 'https://live.staticflickr.com/616/31432955160_89153ae8ea_c.jpg',
            id: '54405277205',
        },
        {
            title: '2015/06/05',
            imgSrc: 'https://live.staticflickr.com/65535/54404027522_c28b1d5f89_c.jpg',
            src: 'https://live.staticflickr.com/402/31801382175_bbe111dcd0_c.jpg',
            id: '54404027522',
        },
        {
            title: '2015/06/07',
            imgSrc: 'https://live.staticflickr.com/65535/54405142048_987b86c4aa_c.jpg',
            src: 'https://live.staticflickr.com/310/31801386475_c1b99f8659_c.jpg',
            id: '54405142048',
        },
    ],
};