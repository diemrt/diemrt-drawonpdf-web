import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Canvas from "./components/Canvas";
import { createContext, useReducer, useState } from "react";
import placeholderReducer, {
  PlaceholderContext,
} from "./reducers/placeholdersReducer";
import { GenericPlaceholder } from "./utils";

const App = () => {
  const INITIAL_STATE = {
    items: [GenericPlaceholder()],
  };
  const [state, dispatch] = useReducer(placeholderReducer, INITIAL_STATE);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <PlaceholderContext.Provider value={{ state, dispatch }}>
      <SelectedPlaceholderContext.Provider value={{ selected, setSelected }}>
        <Container className="my-5">
          <ButtonGroup className="mb-3">
            <Button
              variant="outline-primary"
              onClick={() =>
                dispatch({
                  type: "ADD_PLACEHOLDER",
                  payload: GenericPlaceholder(),
                })
              }
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
          <Row>
            <Col md={8}>
              <Canvas />
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </SelectedPlaceholderContext.Provider>
    </PlaceholderContext.Provider>
  );
};

export const SelectedPlaceholderContext = createContext<
  | {
      selected: string | null;
      setSelected: React.Dispatch<React.SetStateAction<string | null>>;
    }
  | undefined
>(undefined);
export default App;
