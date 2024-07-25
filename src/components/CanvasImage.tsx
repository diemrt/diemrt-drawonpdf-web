import { useContext, useEffect, useRef, useState } from "react";
import { Image } from "react-konva";
import { SelectedPlaceholderContext } from "../App";

interface Props {
  src: string;
}
const CanvasImage = ({ src }: Props) => {
  const [image, setImage] = useState<HTMLImageElement | undefined>(undefined);
  const imageRef = useRef<any>(null);
  const { setSelected } = useContext(SelectedPlaceholderContext) || {};

  useEffect(() => {
    const imageElement = new window.Image();
    imageElement.src = src;
    imageElement.addEventListener("load", handleLoad);
    imageRef.current = imageElement;
    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener("load", handleLoad);
      }
    };
  }, [src]);

  const handleLoad = () => {
    setImage(imageRef.current);
  };

  return (
    <Image
      scaleX={0.5}
      scaleY={0.5}
      image={image}
      ref={imageRef}
      onClick={() => {
        if (setSelected) setSelected(null);
      }}
    />
  );
};

export default CanvasImage;
