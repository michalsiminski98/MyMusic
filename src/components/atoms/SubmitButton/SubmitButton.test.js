import { render, screen } from "@testing-library/react";
import React from "react";
import { StyledButton } from "./SubmitButton.styles";

describe("Submit Button", () => {
  it("renders", () => {
    render(<StyledButton>Submit</StyledButton>);
    screen.getByText("Submit");
  });
});
