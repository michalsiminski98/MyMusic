import { useState } from "react";
import SubmitButton from "../../atoms/SubmitButton/SubmitButton";
import FormField from "../../molecules/FormField/FormField";
import PhotoField from "../../molecules/PhotoField/PhotoField";
import { Title, Wrapper } from "./Form.styles";

const initialState = {
  firstName: "",
  lastName: "",
  type: "",
  peselNip: "",
  img: "",
};

const Form = () => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFormValues({ ...formValues, img: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmitContractor = (e) => {
    e.preventDefault();
    console.log(formValues);
    setFormValues(initialState);
  };

  return (
    <Wrapper onSubmit={handleSubmitContractor}>
      <Title>Add contractor</Title>
      <FormField
        labelText="First name"
        id="firstName"
        name="firstName"
        value={formValues.firstName}
        onChange={handleInputChange}
      />
      <FormField
        labelText="Last name"
        id="lastName"
        name="lastName"
        value={formValues.lastName}
        onChange={handleInputChange}
      />
      <FormField
        labelText="Type"
        id="type"
        name="type"
        inputype="select"
        value={formValues.type}
        onChange={handleInputChange}
      />
      <FormField
        labelText="PESEL/NIP"
        id="peselNip"
        name="peselNip"
        type="number"
        value={formValues.peselNip}
        onChange={handleInputChange}
      />
      <PhotoField
        id="imageUpload"
        name="imageUpload"
        type="file"
        accept="image/jpg,image/jpeg"
        onChange={handleImage}
        img={formValues.img}
      />
      <SubmitButton type="submit" />
    </Wrapper>
  );
};

export default Form;
