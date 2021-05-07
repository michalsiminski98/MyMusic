import { Input, Label, Wrapper } from "./FormField.styles";

const FormField = ({
  labelText,
  id,
  name,
  value,
  inputype = "input",
  type = "text",
  onChange,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{labelText}</Label>
      {inputype === "select" ? (
        <>
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            selected="person"
            form="carform"
          >
            <option value="" defaultValue disabled hidden></option>
            <option value="person">Person</option>
            <option value="business">Business</option>
          </select>
        </>
      ) : (
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
      )}
    </Wrapper>
  );
};

export default FormField;
