import { Input, Label, PhotoWrapper } from "./PhotoField.styles";

const PhotoField = ({ type, accept, name, id, onChange, img }) => {
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

export default PhotoField;
