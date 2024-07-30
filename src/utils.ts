import { createContext } from "react";
import { UseFieldArrayReturn } from "react-hook-form";
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

/**
 * The context for the placeholders field array.
 */
export const PlaceholdersContext = createContext<
  | UseFieldArrayReturn<
      {
        items: {
          x: number;
          y: number;
          width: number;
          height: number;
          stroke: string;
          fill: string;
          name: string;
          uuid: string;
        }[];
      },
      "items",
      "id"
    >
  | undefined
>(undefined);

/**
 * The context for the selected placeholder.
 */
export const SelectedPlaceholderContext = createContext<
  | {
      selected: string | null;
      setSelected: React.Dispatch<React.SetStateAction<string | null>>;
    }
  | undefined
>(undefined);
