import { useEffect, useState } from "react";
import { usePhotos } from 'hooks/usePhotos';
import { ContactSection } from './ContactSection';
import './home.css';

const HOME_PHOTOSET_ID = '72157633811531273';
const SLIDE_DURATION = 5000;

export const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { photos, isLoading, isPhotosFailed } = usePhotos({ 
        pageType: 'home', 
        photosetId: HOME_PHOTOSET_ID 
    });

    const slide = () => {
        if (photos.length === 0) return;
        const nextIndex = currentImageIndex === photos.length - 1 ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(nextIndex);
    }

    useEffect(() => {
        if (photos.length > 0) {
            const timer = setTimeout(slide, SLIDE_DURATION);
            return () => clearTimeout(timer);
        }
    }, [currentImageIndex, photos.length]);

    const getVisibleClassName = (index: number) => currentImageIndex === index ? 'slider-image--is-visible' : '';
    
    if (isLoading) {
        return (
            <div className="home">
                <div className="slider">
                    <div className="slider-loading">Loading photos...</div>
                </div>
                <ContactSection />
            </div>
        );
    }

    if (isPhotosFailed || photos.length === 0) {
        return (
            <div className="home">
                <div className="slider">
                    <div className="slider-error">Failed to load photos</div>
                </div>
                <ContactSection />
            </div>
        );
    }
    
    return (
        <div className="home">
            <div className="slider">
                {photos.map((photo, index) => (
                    <img 
                        key={photo.id}
                        src={photo.bigSrc || photo.src} 
                        alt={photo.title || `home-image-${index}`} 
                        className={`slider-image ${getVisibleClassName(index)}`}
                    />
                ))}
            </div>
            <ContactSection />
        </div>
    )
}