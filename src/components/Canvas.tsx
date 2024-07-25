import { Layer, Stage } from "react-konva";
import CanvasImage from "./CanvasImage";
import { useContext } from "react";
import Rectangle from "./Rectangle";
import { PlaceholdersContext, SelectedPlaceholderContext } from "../App";
import useLoadImageHook from "../hooks/useLoadImageHook";
import { Placeholder } from "../utils";
import { useFormContext } from "react-hook-form";

const Canvas = () => {
  const { image, imageLoaded } = useLoadImageHook();

  const { watch } = useFormContext();
  const { replace } = useContext(PlaceholdersContext) || {};
  const { selected, setSelected } =
    useContext(SelectedPlaceholderContext) || {};

  const placeholders = watch("items") as Placeholder[];
  console.log(placeholders);

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
        <Stage height={canvasHeight} width={canvasWidth}>
          <Layer className="border border-success">
            <CanvasImage src="/pdf-image.jpg" />
          </Layer>
          <Layer>
            {placeholders?.map((placeholder, i) => {
              return (
                <Rectangle
                  key={i}
                  shapeProps={placeholder}
                  isSelected={placeholder.uuid === selected}
                  onSelect={() => {
                    if (setSelected) setSelected(placeholder.uuid);
                  }}
                  onChange={(newAttrs: Placeholder) => {
                    if (replace && selected) {
                      const updatedFields = placeholders?.map((placeholder) => {
                        if (placeholder.uuid === selected) {
                          return {
                            ...placeholder,
                            x: newAttrs.x,
                            y: newAttrs.y,
                            width: newAttrs.width,
                            height: newAttrs.height,
                          };
                        }
                        return placeholder;
                      });
                      replace(updatedFields); // update placeholders in context
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
