import { Layer, Stage } from "react-konva";
import CanvasImage from "./CanvasImage";
import { useContext } from "react";
import Rectangle from "./Rectangle";
import {
  Placeholder,
  PlaceholderContext,
} from "../reducers/placeholdersReducer";
import { SelectedPlaceholderContext } from "../App";
import useLoadImageHook from "../hooks/useLoadImageHook";

const Canvas = () => {
  const {image, imageLoaded} = useLoadImageHook()

  const { state: placheolders, dispatch: placeholdersDispatch } =
    useContext(PlaceholderContext) || {};
  const { selected, setSelected } =
    useContext(SelectedPlaceholderContext) || {};

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
                  isSelected={rect.id === selected}
                  onSelect={() => {
                    if (setSelected) setSelected(rect.id);
                  }}
                  onChange={(newAttrs: Placeholder) => {
                    if (placeholdersDispatch) {
                      placeholdersDispatch({
                        type: "CHANGE_PLACEHOLDER",
                        payload: newAttrs,
                      }); // update redux state
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
