import { usePhotos } from "hooks/usePhotos";
import React, { useEffect, useRef } from "react";
import { Gallery, PhotoProps } from "react-ikusi";
import { PAGE_WITH_GALLERY } from "./constants";
import { GalleryName } from "./page-with-gallery.types";

interface PageWithGalleryProps {
    galleryName: GalleryName;
}

const PageWithGallery = ({ galleryName }: PageWithGalleryProps) => {
    const {pageType, photosetId, configurations} = PAGE_WITH_GALLERY[galleryName];
    const [galleryState, setGalleryState] = React.useState<PhotoProps[]>([]);
    const { photos } = usePhotos({ pageType, photosetId, shouldFetch: !galleryState.length });
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (photos?.length && !galleryState.length) {
            setGalleryState((prevState) => ([
                ...prevState,
                ...photos,
            ]));
        }
    }, [setGalleryState, photos, photosetId]);

    return (
        <div ref={ref}>
            <Gallery
                photos={galleryState}
                configurations={configurations}
            />
        </div>
    )
}

export const Gatza = () => <PageWithGallery galleryName="gatza" />;
export const MakingOf = () => <PageWithGallery galleryName="gatza-makingof" />;
export const MakingOfAraotz = () => <PageWithGallery galleryName="araotz-makingof"/>;
