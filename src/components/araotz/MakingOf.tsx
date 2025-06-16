import { useEffect } from "react";
import { PAGE_WITH_GALLERY } from "./constants";
import React from "react";
import { Gallery, PhotoProps } from "react-ikusi";
import { SizeKeys } from "utils/constants";
import { transformToPhoto } from "utils/transform-flickr-result";

const def = SizeKeys.medium800;
const big = SizeKeys.large;
const urlsBySize = `url${def},url${big}`;

const getPhotosetUrl = (photosetId: string, extras: string) =>
    `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${import.meta.env.VITE_FLICKR_ARAOTZ_API_KEY}&extras=${extras}&format=json&nojsoncallback=true&method=flickr.photosets.getPhotos&photoset_id=${photosetId}`;
  
async function getPhotoset(photoSetId: string, size: string) {
    const response = await fetch(getPhotosetUrl(photoSetId, size));
    return response && response.ok
      ? (await response.json()).photoset.photo
      : { Error: `Error while reading photoset=${photoSetId}` };
}

export const MakingOf = () => {
    const { photosetId, configurations } = PAGE_WITH_GALLERY['makingof'];
    const [galleryState, setGalleryState] = React.useState<PhotoProps[]>([]);

    useEffect(() => {
          getPhotoset(photosetId, urlsBySize).then(
              (result) => setGalleryState((prevState) => (
                [...prevState, ...transformToPhoto(result, def, big)]
            )),
            (error) => console.log("error =" + error)
          );
    });
    
    return (
        <div>
            <Gallery
                photos={galleryState}
                configurations={configurations}
            />
        </div>
    )
}