import { Form, InputGroup } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import { PlaceholderContext } from "../reducers/placeholdersReducer";
import { useContext } from "react";

const PlaceholdersForm = () => {
  const { state } = useContext(PlaceholderContext) || {};
  const { control, register } = useForm({
    defaultValues: {
      placeholders: state?.items,
    },
  });
  const { fields } = useFieldArray({
    control,
    name: "placeholders",
  });

  return (
    <div className="d-flex flex-column gap-3">
      <h6>Placeholders</h6>
      {fields.map((field, index) => (
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
          <Form.Control {...register(`placeholders.${index}.id`)} />
          <InputGroup.Text>x: {field.x}</InputGroup.Text>
          <InputGroup.Text>y: {field.y}</InputGroup.Text>
        </InputGroup>
      ))}
    </div>
  );
};

export default PlaceholdersForm;
