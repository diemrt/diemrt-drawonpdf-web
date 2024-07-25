import { Layer, Stage } from "react-konva";
import CanvasImage from "./CanvasImage";
import { useState, useEffect, useContext } from "react";
import Rectangle from "./Rectangle";
import {
  Placeholder,
  PlaceholderContext,
} from "../reducers/placeholdersReducer";

const Canvas = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  
  const {state: placheolders, dispatch: placeholdersDispatch} = useContext(PlaceholderContext) || {};
  const [selectedId, selectShape] = useState<string | null>(null);

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

  // deselect active shape when clicked on empty area
  const checkDeselect = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  // MAIN FUNCTION
  const handleImageLoad = () => {
    // set canvas width and height to half of image width and height
    const canvasWidth = image!.width / 2;
    const canvasHeight = image!.height / 2;

    return (
      <div
        className="border border-3 rounded p-4"
        style={{ width: "fit-content" }}
      >
        <Stage
          height={canvasHeight}
          width={canvasWidth}
          onMouseDown={checkDeselect} // deselect active shape when clicked on empty area
          onTouchStart={checkDeselect} // deselect active shape when clicked on empty area
        >
          <Layer className="border border-success">
            <CanvasImage src="/pdf-image.jpg" />
          </Layer>
          <Layer>
            {placheolders?.items?.map((rect, i) => {
              console.log(rect);
              return (
                <Rectangle
                  key={i}
                  shapeProps={rect}
                  isSelected={rect.id === selectedId}
                  onSelect={() => {
                    selectShape(rect.id);
                  }}
                  onChange={(newAttrs: Placeholder) => {
                    if (placeholdersDispatch) {
                        placeholdersDispatch({ type: "CHANGE_PLACEHOLDER", payload: newAttrs }); // update redux state
                    }
                  }}
                />
              );
            })}
          </Layer>
        </Stage>
      </div>
    );
  };

  // return loading message if image is not loaded
  return <div>{imageLoaded ? handleImageLoad() : "loading..."}</div>;
};

export default Canvas;
