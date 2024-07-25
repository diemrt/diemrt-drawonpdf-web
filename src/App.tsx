import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Canvas from "./components/Canvas";
import { useReducer } from "react";
import placeholderReducer, {
  PlaceholderContext,
} from "./reducers/placeholdersReducer";

const App = () => {
  const INITIAL_STATE = {
    items: [
      {
        x: 10,
        y: 10,
        width: 100,
        height: 100,
        stroke: "#317cb1",
        fill: "#72a0c17b",
        id: "placeholder-1",
      },
    ],
  };
  const [state, dispatch] = useReducer(placeholderReducer, INITIAL_STATE);

  return (
    <PlaceholderContext.Provider value={{ state, dispatch }}>
      <Container className="my-5">
        <ButtonGroup className="mb-3">
          <Button variant="outline-primary">Nuovo placeholder</Button>
          <Button variant="outline-secondary">Deseleziona</Button>
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
    </PlaceholderContext.Provider>
  );
};

export default App;
