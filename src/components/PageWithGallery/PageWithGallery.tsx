import { usePhotos } from "hooks/usePhotos";
import React, { useEffect, useRef } from "react";
import { Gallery, PhotoProps } from "react-ikusi";
import { GalleryName } from "./page-with-gallery.types";
import './PageWithGallery.css';
import { PAGE_WITH_GALLERY } from "./constants";

interface PageWithGalleryProps {
    galleryName: GalleryName;
    photosetIdProp?: string;
}

const PageWithGallery = ({ galleryName, photosetIdProp }: PageWithGalleryProps) => {
    const [galleryState, setGalleryState] = React.useState<PhotoProps[]>([]);
    const { pageType, photosetId: photosetIdFromConfig, configurations } = PAGE_WITH_GALLERY[galleryName];
    const photosetId = photosetIdProp || photosetIdFromConfig;
    const { photos } = usePhotos({ pageType, photosetId });
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (photos?.length && !galleryState.length) {
            setGalleryState((prevState) => ([
                ...prevState,
                ...photos,
            ]));
        }
    }, [setGalleryState, photos]);

    return (
        <div ref={ref} className={`page-with-gallery`}>
            <Gallery
                photos={galleryState}
                configurations={configurations}
            />
        </div>
    )
}

export const Gatza = () => <PageWithGallery galleryName="gatza" />;
export const MakingOfGatza = () => <PageWithGallery galleryName="gatza-makingof" />;
export const Araotz = () => <PageWithGallery galleryName="araotz"/>;
export const MakingOfAraotz = () => <PageWithGallery galleryName="araotz-makingof"/>;
