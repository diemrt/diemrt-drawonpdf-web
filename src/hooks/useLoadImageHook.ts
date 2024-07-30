import { useEffect, useState } from "react";

/**
 * Custom hook for loading an image asynchronously.
 * @returns An object containing the loaded image and a boolean indicating whether the image has been loaded.
 */
const useLoadImageHook = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  useEffect(() => {
    // load image
    const loadImage = async () => {
      const img = new Image();
      img.src = "/pdf-image.jpg";
      await new Promise((resolve) => {
        // on image load, set image and imageLoaded state
        img.onload = () => {
          setImage(img);
          setImageLoaded(true);
          resolve(img);
        };
      });
    };

    loadImage();
  }, []);

  return { image, imageLoaded };
};

export default useLoadImageHook;
