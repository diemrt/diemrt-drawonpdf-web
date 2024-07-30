import { Button, Form, InputGroup } from "react-bootstrap";
import { useContext } from "react";
import { PlaceholdersContext, SelectedPlaceholderContext } from "../App";
import { Controller, useFormContext } from "react-hook-form";

const PlaceholdersForm = () => {
  const { control, watch } = useFormContext();
  const { fields, remove } = useContext(PlaceholdersContext) || {};
  const { selected } = useContext(SelectedPlaceholderContext) || {};

  return (
    <div className="d-flex flex-column gap-3 w-100">
      <h6>Placeholders</h6>
      {fields?.length === 0 && (
        <p className="text-secondary fst-italic">Nessun placeholder</p>
      )}
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
            <Controller
              render={({ field }) => (
                <Form.Control {...field} className="w-auto" />
              )}
              name={`items.${index}.name`}
              control={control}
            />
            <InputGroup.Text>
              <Button
                variant="danger"
                onClick={() => {
                  if (remove) remove(index);
                }}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" />
                </svg>
              </Button>
            </InputGroup.Text>
          </InputGroup>
          <pre>
            {JSON.stringify(
              {
                ...watch(`items.${index}`),
                x: watch(`items.${index}`).x * 2,
                y: watch(`items.${index}`).y * 2,
                width: watch(`items.${index}`).width * 2,
                height: watch(`items.${index}`).height * 2,
              },
              undefined,
              2
            )}
          </pre>
        </div>
      ))}
    </div>
  );
};

export default PlaceholdersForm;
