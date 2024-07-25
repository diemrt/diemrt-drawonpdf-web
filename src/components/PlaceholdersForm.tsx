import { Form, InputGroup } from "react-bootstrap";
import { useContext } from "react";
import { PlaceholdersContext, SelectedPlaceholderContext } from "../App";
import { useFormContext } from "react-hook-form";

const PlaceholdersForm = () => {
  const { register} = useFormContext();
  const { fields } = useContext(PlaceholdersContext) || {};
  const { selected } = useContext(SelectedPlaceholderContext) || {};

  return (
    <div className="d-flex flex-column gap-3 w-100">
      <h6>Placeholders</h6>
      {fields?.map((field, index) => (
        <div className="d-flex flex-column gap-1">
        <InputGroup key={field.id} className={selected === field.uuid ? "border border-2 border-primary rounded" : ""}>
          <InputGroup.Text><div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: field.fill,
              border: `2px solid ${field.stroke}`,
            }}
          ></div></InputGroup.Text>          
          <Form.Control {...register(`items.${index}.name`)} className="w-auto" />
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
