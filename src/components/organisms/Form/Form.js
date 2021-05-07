import { useEffect, useState } from "react";
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
  // if validation flag = true, form is ok
  const [validationFlag, setValidationFlag] = useState(false);
  const [peselInfoFlag, setPeselInfoFlag] = useState(false);

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

  useEffect(() => {
    if (formValues.type === "person") {
      if (
        formValues.peselNip.length === 11 &&
        Number.isInteger(Number(formValues.peselNip))
      ) {
        setValidationFlag(true);
      } else setValidationFlag(false);
    } else if (formValues.type === "business") {
      let country = formValues.peselNip.split("").slice(0, 2);
      let flag = true;
      for (let i = 0; i < country.length; i++) {
        country[i] = country[i].toLowerCase();
        if (
          ![
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
          ].includes(country[i])
        ) {
          flag = false;
        }
      }
      if (flag === true && formValues.peselNip.length === 12)
        setValidationFlag(true);
      else setValidationFlag(false);
    }
  }, [formValues, validationFlag]);

  const handleSubmitContractor = (e) => {
    e.preventDefault();
    if (validationFlag) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "React Hooks POST Request Example" }),
      };
      fetch("https://localhost:60001/Contractor/Save", requestOptions)
        .then((response) => response.json())
        .catch(console.log("Nie znaleziono metody zapisu"));
      setFormValues(initialState);
      setPeselInfoFlag(false);
      setValidationFlag(false);
    } else {
      setPeselInfoFlag(true);
    }
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
        value={formValues.peselNip}
        onChange={handleInputChange}
      />
      {peselInfoFlag && (
        <p style={{ color: "red", fontSize: 12 }}>Incorrect PESEL/NIP</p>
      )}
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
