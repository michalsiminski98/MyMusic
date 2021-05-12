import { Input, Label, Wrapper } from "./FormField.styles";
import PropTypes from "prop-types";

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
            data-testid={name}
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
          data-testid={name}
        />
      )}
    </Wrapper>
  );
};

FormField.propTypes = {
  labelText: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  inputype: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
