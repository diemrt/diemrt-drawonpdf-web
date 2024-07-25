import { Form, InputGroup } from "react-bootstrap";
import { useContext } from "react";
import { PlaceholdersContext } from "../App";
import { useFormContext } from "react-hook-form";

const PlaceholdersForm = () => {
  const { register} = useFormContext();
  const { fields } = useContext(PlaceholdersContext) || {};

  return (
    <div className="d-flex flex-column gap-3">
      <h6>Placeholders</h6>
      {fields?.map((field, index) => (
        <InputGroup key={field.id} style={{ width: "fit-content" }}>
          <InputGroup.Text><div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: field.fill,
              border: `2px solid ${field.stroke}`,
            }}
          ></div></InputGroup.Text>          
          <Form.Control {...register(`items.${index}.name`)} />
          <InputGroup.Text>x: {field.x}</InputGroup.Text>
          <InputGroup.Text>y: {field.y}</InputGroup.Text>
        </InputGroup>
      ))}
    </div>
  );
};

export default PlaceholdersForm;
