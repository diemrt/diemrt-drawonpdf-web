import { v4 as uuidv4 } from "uuid";

export const GenericPlaceholder = () => {
  return {
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    stroke: "#317cb1",
    fill: "#72a0c17b",
    id: `placeholder-${uuidv4()}`,
  };
};
