import { usePhotos } from "hooks/usePhotos";
import React, { useEffect, useRef } from "react";
import { Gallery, PhotoProps } from "react-ikusi";
import { PageWithGalleryType,PAGE_WITH_GALLERY } from "./constants";

interface PageWithGalleryProps {
    type: PageWithGalleryType;
}

const PageWithGallery = ({ type }: PageWithGalleryProps) => {
    const {photosetId, configurations} = PAGE_WITH_GALLERY[type];
    const [galleryState, setGalleryState] = React.useState<PhotoProps[]>([]);
    const { photos } = usePhotos({ photosetId, shouldFetch: !galleryState.length });
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

export const Gatza = () => <PageWithGallery type="gatza" />;
export const MakingOf = () => <PageWithGallery type="makingof" />;