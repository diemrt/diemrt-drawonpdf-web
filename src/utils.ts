export type Placeholder = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  stroke: string;
};

export const GenericPlaceholder = (uuid: string) => {
  return {
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    stroke: "#317cb1",
    fill: "#72a0c17b",
    id: `placeholder-${uuid}`,
  };
};
