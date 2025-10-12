import { useEffect, useState } from "react";
import { ContactSection } from './ContactSection';
import './home.css';

const SLIDER_IMAGES = [
    'https://live.staticflickr.com/65535/53010964465_209f9c00d5_h.jpg',
    'https://live.staticflickr.com/65535/54143379411_7b464e34ec_h.jpg',
    'https://live.staticflickr.com/65535/54221253656_7efbafed2b_h.jpg'
];
const SLIDE_DURATION = 5000;

export const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const slide = () => {
        const nextIndex = currentImageIndex === SLIDER_IMAGES.length - 1 ? 0 : currentImageIndex + 1;
        console.log(currentImageIndex, nextIndex);
        setCurrentImageIndex(nextIndex);
    }
    useEffect(() => {
        setTimeout(slide, SLIDE_DURATION);
    }, [currentImageIndex, slide]);

    const getVisibleClassName = (index: number) => currentImageIndex === index ? 'slider-image--is-visible' : '';
    
    return (
        <div className="home">
            <div className="slider">
                <img src={SLIDER_IMAGES[0]} alt={`home-image${currentImageIndex}`} className={`slider-image ${getVisibleClassName(0)}`} />
                <img src={SLIDER_IMAGES[1]} alt={`home-image${currentImageIndex}`} className={`slider-image ${getVisibleClassName(1)}`} />
                <img src={SLIDER_IMAGES[2]} alt={`home-image${currentImageIndex}`} className={`slider-image ${getVisibleClassName(2)}`} />
            </div>
            <ContactSection />
        </div>
    )
}