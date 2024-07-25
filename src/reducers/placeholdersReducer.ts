import { createContext } from "react";

export type Placeholder = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  stroke: string;
};

export type ACTIONTYPE = {
  type: "CHANGE_PLACEHOLDER" | "ADD_PLACEHOLDER" | "DELETE_PLACEHOLDER";
  payload: Placeholder;
};

export type INITIAL_STATE = {
  items: Placeholder[];
};

export const handleChangePlaceholder = (payload: Placeholder) => {
  return {
    type: "CHANGE_PLACEHOLDER",
    payload,
  };
};

export const handleAddPlaceholder = (payload: Placeholder) => {
  return {
    type: "ADD_PLACEHOLDER",
    payload,
  };
};

export const handleDeletePlaceholder = (payload: Placeholder) => {
  return {
    type: "DELETE_PLACEHOLDER",
    payload,
  };
};

const placeholderReducer = (state: INITIAL_STATE, action: ACTIONTYPE) => {
  switch (action.type) {
    case "CHANGE_PLACEHOLDER":
      return {
        ...state,
        items: state.items.map((placeholder) =>
          placeholder.id === action.payload.id ? action.payload : placeholder
        ),
      };
    case "ADD_PLACEHOLDER":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "DELETE_PLACEHOLDER":
      return {
        ...state,
        items: state.items.filter(
          (placeholder) => placeholder.id !== action.payload?.id
        ),
      };
    default:
      return state;
  }
};

export const PlaceholderContext = createContext<{state: INITIAL_STATE, dispatch: React.Dispatch<ACTIONTYPE>} | undefined>(undefined)

export default placeholderReducer;
