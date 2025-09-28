import React, { useEffect, useState } from "react";
import { Gallery, PhotoProps } from "react-ikusi";
import { ARAOTZ_FAMILIES, AraotzFamily, AraotzFamilyWithPhoto } from "./constants";
import "./araotz.css";

const FLICKR_API_KEY = import.meta.env.VITE_FLICKR_ARAOTZ_API_KEY;

interface FlickrPhotoSize {
  label: string;
  width: number;
  height: number;
  source: string;
}

interface FlickrPhotoInfo {
  photoId: string;
  sizes: FlickrPhotoSize[];
}

const Araotz: React.FC = () => {
  const [familiesWithPhotos, setFamiliesWithPhotos] = useState<AraotzFamilyWithPhoto[]>([]);
  const [selectedFamily, setSelectedFamily] = useState<{
    index: number;
    family: AraotzFamily;
    photos: PhotoProps[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Flickr API functions
  const getPhotoUrl = (photoId: string) =>
    `https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${FLICKR_API_KEY}&photo_id=${photoId}&format=json&nojsoncallback=1`;

  const getPhotosetUrl = (photosetId: string, size: string) =>
    `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&extras=${size}&format=json&nojsoncallback=true&method=flickr.photosets.getPhotos&photoset_id=${photosetId}`;

  const getPhoto = async (photoId: string, sizeLabels: string[]): Promise<FlickrPhotoInfo> => {
    const response = await fetch(getPhotoUrl(photoId));
    if (response && response.ok) {
      const infos = await response.json();
      return {
        photoId,
        sizes: infos.sizes.size.filter((s: FlickrPhotoSize) => sizeLabels.includes(s.label))
      };
    }
    throw new Error(`Error while reading photo=${photoId}`);
  };

  const getPhotos = async (photoIds: string[], sizeLabels: string[]): Promise<FlickrPhotoInfo[]> => {
    const photos = await Promise.all(photoIds.map(id => getPhoto(id, sizeLabels)));
    return photos;
  };

  const getPhotoset = async (photoSetId: string, size: string) => {
    const response = await fetch(getPhotosetUrl(photoSetId, size));
    return response && response.ok
      ? (await response.json()).photoset.photo
      : { Error: `Error while reading photoset=${photoSetId}` };
  };

  // Device detection
  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "mobile";
    }
    return "desktop";
  };

  const getMiniFamiliesSizes = () => {
    const device = getDeviceType();
    if (device === "mobile") {
      return {
        def: "Small 320",
        big: "Medium",
      };
    }
    return {
      def: "Small",
      big: "Large",
    };
  };

  const getFamiliesSizes = () => {
    const device = getDeviceType();
    if (device === "mobile") {
      return {
        def: { url: "url_n", width: "width_n", height: "height_n" },
        big: { url: "url_o", width: "width_o", height: "height_o" },
      };
    }
    return {
      def: { url: "url_l", width: "width_l", height: "height_l" },
      big: { url: "url_l", width: "width_l", height: "height_l" },
    };
  };

  // Transform functions
  const transformForAllFamilies = (result: FlickrPhotoInfo[]): AraotzFamilyWithPhoto[] => {
    const miniFamiliesSizes = getMiniFamiliesSizes();
    
    return result.map(({ sizes }, index) => {
      const big = sizes.find((s) => s.label === miniFamiliesSizes.big);
      const miniPicture = sizes.find((s) => s.label === miniFamiliesSizes.def);
      const galleryPicture = sizes.find((s) => s.label === miniFamiliesSizes.big);
      
      if (!big || !miniPicture || !galleryPicture) {
        throw new Error(`Missing size for family at index ${index}`);
      }

      const gallery = {
        src: galleryPicture.source,
        width: galleryPicture.width,
        height: galleryPicture.height,
        bigSrc: big.source,
        id: index.toString(),
        title: ARAOTZ_FAMILIES[index].name,
      };

      return {
        ...ARAOTZ_FAMILIES[index],
        miniPicture: miniPicture.source,
        gallery: gallery,
      };
    });
  };

  const transformForGallery = (result: any[]): PhotoProps[] => {
    const familiesSizes = getFamiliesSizes();
    return result.map((r, index) => ({
      src: r[familiesSizes.def.url],
      width: r[familiesSizes.def.width],
      height: r[familiesSizes.def.height],
      bigSrc: r[familiesSizes.big.url],
      id: r.id || index.toString(),
      title: r.title || '',
    }));
  };

  // Load initial family cover photos
  useEffect(() => {
    const loadFamilyCovers = async () => {
      try {
        setIsLoading(true);
        const miniFamiliesSizes = getMiniFamiliesSizes();
        const coverIds = ARAOTZ_FAMILIES.map(f => f.coverId);
        const result = await getPhotos(coverIds, Object.values(miniFamiliesSizes));
        const familiesWithPhotos = transformForAllFamilies(result);
        setFamiliesWithPhotos(familiesWithPhotos);
      } catch (error) {
        console.error("Error loading family covers:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFamilyCovers();
  }, []);

  // Handle family click
  const openFamily = async (index: number) => {
    try {
      const family = ARAOTZ_FAMILIES[index];
      const familiesSizes = getFamiliesSizes();
      const urlsBySize = `${familiesSizes.def.url},${familiesSizes.big.url}`;
      
      const photos = await getPhotoset(family.photosetId, urlsBySize);
      setSelectedFamily({
        index,
        family,
        photos: transformForGallery(photos),
      });
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error loading family photos:", error);
    }
  };

  const closeFamily = () => {
    setSelectedFamily(null);
    window.scrollTo(0, 0);
  };

  // Gallery configurations
  const configurations = [
    { minWidth: 480, cols: 3, margin: 1 },
    { maxWidth: 479, cols: 2, margin: 1 },
  ];

  if (isLoading) {
    return <div className="araotz-loading">Loading families...</div>;
  }

  return (
    <div className="araotz-wrapper">
      {!selectedFamily ? (
        <div className="araotz-families-container">
          <Gallery
            photos={familiesWithPhotos.map(p => p.gallery)}
            configurations={configurations}
            onClickPhoto={(photo) => openFamily(parseInt(photo.id))}
          />
        </div>
      ) : (
        <div className="araotz-selected-family">
          <div className="araotz-family-header">
            <button onClick={closeFamily} className="araotz-back-button">
              ← Back to Families
            </button>
            <h2 className="araotz-family-name">{selectedFamily.family.name}</h2>
          </div>
          <Gallery
            photos={selectedFamily.photos}
            configurations={configurations}
            onClickPhoto={() => {}} // Prevent lightbox by providing empty handler
          />
        </div>
      )}
    </div>
  );
};

export default Araotz;