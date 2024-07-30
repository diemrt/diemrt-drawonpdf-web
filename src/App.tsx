import { Container } from "react-bootstrap";
import Canvas from "./components/Canvas";
import { useState } from "react";
import PlaceholdersForm from "./components/PlaceholdersForm";
import {
  FormProvider,
} from "react-hook-form";
import useFormHelperHook from "./hooks/useFormHelperHook";
import useFieldArrayHelperHook from "./hooks/useFieldArrayHelperHook";
import Toolbar from "./components/Toolbar";
import { PlaceholdersContext, SelectedPlaceholderContext } from "./utils";

const App = () => {
  // The selected placeholder state.
  const [selected, setSelected] = useState<string | null>(null);

  // Form helper methods.
  const methods = useFormHelperHook();
  const { control } = methods;

  // Field array helper methods.
  const fieldArray = useFieldArrayHelperHook(control, "items");

  return (
    <FormProvider {...methods}>
      <PlaceholdersContext.Provider value={fieldArray}>
        <SelectedPlaceholderContext.Provider value={{ selected, setSelected }}>
          <Container className="my-5">
            <Toolbar />
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

export default App;
