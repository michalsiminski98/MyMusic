import PhotoButton from "../../atoms/PhotoButton/PhotoButton";
import { PhotoWrapper } from "../../atoms/PhotoWrapper/PhotoWrapper";
import SubmitButton from "../../atoms/SubmitButton/SubmitButton";
import FormField from "../../molecules/FormField/FormField";
import { Title, Wrapper } from "./Form.styles";

const Form = () => {
  return (
    <Wrapper>
      <Title>Add contractor</Title>
      <FormField />
      <FormField />
      <FormField />
      <FormField />
      <PhotoWrapper />
      <PhotoButton />
      <SubmitButton />
    </Wrapper>
  );
};

export default Form;
