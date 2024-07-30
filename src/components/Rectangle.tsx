
import { Fragment, useEffect, useRef } from "react";
import { Rect, Transformer } from "react-konva";

interface Props {
  isSelected: boolean;
  shapeProps: any;
  onSelect: any;
  onChange: any;
}

/**
 * Represents a rectangle component.
 *
 * @component
 * @param {boolean} isSelected - Indicates whether the rectangle is selected.
 * @param {any} shapeProps - The properties of the rectangle shape.
 * @param {Function} onSelect - The function to call when the rectangle is selected.
 * @param {Function} onChange - The function to call when the rectangle is changed.
 * @returns {JSX.Element} The rectangle component.
 */
const Rectangle = ({ isSelected, onChange, onSelect, shapeProps }: Props) => {
  const shapeRef = useRef<any>();
  const trRef = useRef<any>();

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <Fragment>
      <Rect
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        onDragStart={onSelect}
        onDragMove={onSelect}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={() => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </Fragment>
  );
};

export default Rectangle;
