import { Button, ButtonGroup, Container } from "react-bootstrap";
import Canvas from "./components/Canvas";
import { createContext, useState } from "react";
import { GenericPlaceholder } from "./utils";
import PlaceholdersForm from "./components/PlaceholdersForm";
import {
  FormProvider,
  useFieldArray,
  UseFieldArrayReturn,
  useForm,
} from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const INITIAL_STATE = {
    items: [GenericPlaceholder(uuidv4())],
  };
  const [selected, setSelected] = useState<string | null>(null);

  const methods = useForm({
    defaultValues: INITIAL_STATE,
  });
  const { control } = methods;
  const fieldArray = useFieldArray({
    control,
    name: "items",
  });
  const { append } = fieldArray;

  return (
    <FormProvider {...methods}>
      <PlaceholdersContext.Provider value={fieldArray}>
        <SelectedPlaceholderContext.Provider value={{ selected, setSelected }}>
          <Container className="my-5">
            <ButtonGroup className="mb-3">
              <Button
                variant="outline-primary"
                onClick={() => append(GenericPlaceholder(uuidv4()))}
              >
                Nuovo placeholder
              </Button>
              <Button
                variant="outline-secondary"
                onClick={() => setSelected(null)}
              >
                Deseleziona
              </Button>
              <Button variant="outline-secondary">Indietro</Button>
              <Button variant="outline-secondary">Avanti</Button>
              <Button variant="outline-danger">Elimina tutto</Button>
            </ButtonGroup>
            <div className="d-flex gap-5 align-items-start">
              <Canvas />
              <PlaceholdersForm />
            </div>
          </Container>
        </SelectedPlaceholderContext.Provider>
      </PlaceholdersContext.Provider>
    </FormProvider>
  );
};

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
          name:string;
          uuid: string;
        }[];
      },
      "items",
      "id"
    >
  | undefined
>(undefined);
export const SelectedPlaceholderContext = createContext<
  | {
      selected: string | null;
      setSelected: React.Dispatch<React.SetStateAction<string | null>>;
    }
  | undefined
>(undefined);
export default App;
