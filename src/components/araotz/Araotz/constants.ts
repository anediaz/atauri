import { PhotoProps } from "react-ikusi";

export interface AraotzFamily {
  name: string;
  coverId: string;
  photosetId: string;
}

export interface AraotzFamilyWithPhoto extends AraotzFamily {
  miniPicture: string;
  gallery: PhotoProps;
}

export const ARAOTZ_FAMILIES: AraotzFamily[] = [];

