import { useEffect, useReducer, useState } from "react";
import SubmitButton from "../../atoms/SubmitButton/SubmitButton";
import FormField from "../../molecules/FormField/FormField";
import PhotoField from "../../molecules/PhotoField/PhotoField";
import { Title, Wrapper } from "./Form.styles";

// initial state for form
const initialState = {
  firstName: "",
  lastName: "",
  type: "",
  peselNip: "",
  img: "",
};

const Form = () => {
  const [formValues, setFormValues] = useReducer(
    formValuesReducer,
    initialState
  );
  // if validation flag = true, form is ok
  const [validationFlag, setValidationFlag] = useState(false);
  // "peselInfoFlag" is info in JSX about validation error
  const [peselInfoFlag, setPeselInfoFlag] = useState(false);

  // handler for every input
  function formValuesReducer(state, action) {
    switch (action.type) {
      case "inputChange":
        return { ...state, [action.name]: action.value };
      case "clearInputs":
        return initialState;
      default:
        throw new Error();
    }
  }
  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFormValues({
          type: "inputChange",
          name: "img",
          value: reader.result,
        });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // validation for Pesel/Nip input
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

  // submiting or rejecting form submit
  const handleSubmitContractor = (e) => {
    e.preventDefault();
    if (validationFlag) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "Contractor data" },
        body: JSON.stringify({ formValues }),
      };
      fetch("https://localhost:60001/Contractor/Save", requestOptions)
        .then((response) => response.json())
        .catch(console.log("Nie znaleziono metody zapisu"));
      setFormValues({ type: "clearInputs" });
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
        onChange={(e) =>
          setFormValues({
            type: "inputChange",
            name: "firstName",
            value: e.target.value,
          })
        }
      />
      <FormField
        labelText="Last name"
        id="lastName"
        name="lastName"
        value={formValues.lastName}
        onChange={(e) =>
          setFormValues({
            type: "inputChange",
            name: "lastName",
            value: e.target.value,
          })
        }
      />
      <FormField
        labelText="Type"
        id="type"
        name="type"
        inputype="select"
        value={formValues.type}
        onChange={(e) =>
          setFormValues({
            type: "inputChange",
            name: "type",
            value: e.target.value,
          })
        }
      />
      <FormField
        labelText="PESEL/NIP"
        id="peselNip"
        name="peselNip"
        value={formValues.peselNip}
        onChange={(e) =>
          setFormValues({
            type: "inputChange",
            name: "peselNip",
            value: e.target.value,
          })
        }
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
