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
    <>
      {fields.map((field, index) => (
        <InputGroup key={field.id}>
          <Form.Control {...register(`placeholders.${index}.id`)} />
        </InputGroup>
      ))}
    </>
  );
};

export default PlaceholdersForm;
