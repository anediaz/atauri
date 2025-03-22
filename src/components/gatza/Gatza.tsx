import { usePhotos } from "hooks/usePhotos";
import React, { useEffect, useRef } from "react";
import { Gallery, PhotoProps } from "react-ikusi";
import { PHOTOSET_IDS } from "./constants";

export const CONFIGURATIONS = [
  { minWidth: 1024, cols: 12, margin: 2 },
  {
    minWidth: 480, maxWidth: 1023, cols: 7, margin: 1,
  },
  { maxWidth: 479, cols: 4, margin: 1 },
];

export const Gatza = () => {
    const photosetId = PHOTOSET_IDS.home;
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
                configurations={CONFIGURATIONS}
            />
        </div>
    )
}