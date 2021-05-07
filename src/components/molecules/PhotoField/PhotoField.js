import { Input, Label, PhotoWrapper } from "./PhotoField.styles";
import PropTypes from "prop-types";

const PhotoField = ({ id, name, type, accept, onChange, img }) => {
  return (
    <>
      <PhotoWrapper src={img} />
      <Input
        type={type}
        accept={accept}
        name={name}
        id={id}
        onChange={onChange}
        hidden
      />
      <Label htmlFor={id}>Choose photo</Label>
    </>
  );
};

PhotoField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  accept: PropTypes.string,
  onChange: PropTypes.func,
  img: PropTypes.string,
};

export default PhotoField;
