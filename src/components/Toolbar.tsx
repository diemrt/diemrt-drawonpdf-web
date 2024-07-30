import { useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { GenericPlaceholder, PlaceholdersContext, SelectedPlaceholderContext } from "../utils";

/**
 * Toolbar component for managing placeholders.
 */
const Toolbar = () => {
    const { append, remove } = useContext(PlaceholdersContext) || {};
    const { setSelected } = useContext(SelectedPlaceholderContext) || {};

    return (
        <ButtonGroup className="mb-3">
            {/* Button for adding a new placeholder */}
            <Button
                variant="outline-primary"
                onClick={() => {
                    if (append) append(GenericPlaceholder(uuidv4()));
                }}
            >
                Nuovo placeholder
            </Button>
            {/* Button for deselecting the selected placeholder */}
            <Button
                variant="outline-secondary"
                onClick={() => {
                    if (setSelected) setSelected(null);
                }}
            >
                Deseleziona
            </Button>
            {/* Button for removing all placeholders */}
            <Button
                variant="outline-danger"
                onClick={() => {
                    if (remove) remove();
                }}
            >
                Elimina tutto
            </Button>
        </ButtonGroup>
    );
};

export default Toolbar;
