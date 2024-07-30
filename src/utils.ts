import { v4 as uuidv4 } from "uuid";
export type Placeholder = {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  stroke: string;
  uuid: string;
  name: string;
};

/**
 * Creates a generic placeholder object with specified properties.
 * @param uuid - The unique identifier for the placeholder.
 * @returns The generic placeholder object.
 */
export const GenericPlaceholder = (uuid: string) => {
  return {
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    stroke: "#317cb1",
    fill: "#72a0c17b",
    uuid: uuid,
    name: `placeholder-${uuid}`,
  };
};

/**
 * The initial state for the placeholders.
 */
export const INITIAL_STATE = {
  items: [GenericPlaceholder(uuidv4())],
};