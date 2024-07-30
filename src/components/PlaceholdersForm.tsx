import { Form, InputGroup } from "react-bootstrap";
import { useContext } from "react";
import { PlaceholdersContext, SelectedPlaceholderContext } from "../App";
import { useFormContext } from "react-hook-form";

const PlaceholdersForm = () => {
  const { register } = useFormContext();
  const { fields } = useContext(PlaceholdersContext) || {};
  const { selected } = useContext(SelectedPlaceholderContext) || {};

  return (
    <div className="d-flex flex-column gap-3 w-100">
      <h6>Placeholders</h6>
      {fields?.length === 0 && <p className="text-secondary fst-italic">Nessun placeholder</p>}
      {fields?.map((field, index) => (
        <div
          className={`card p-4 d-flex flex-column gap-2 ${
            selected === field.uuid
              ? "border border-3 border-primary rounded"
              : ""
          }`}
        >
          <InputGroup key={field.id}>
            <InputGroup.Text>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: field.fill,
                  border: `2px solid ${field.stroke}`,
                }}
              ></div>
            </InputGroup.Text>
            <Form.Control
              {...register(`items.${index}.name`)}
              className="w-auto"
            />
          </InputGroup>
          <small>x: {field.x}</small>
          <small>y: {field.y}</small>
          <small>width: {field.width}</small>
          <small>height: {field.height}</small>
        </div>
      ))}
    </div>
  );
};

export default PlaceholdersForm;
