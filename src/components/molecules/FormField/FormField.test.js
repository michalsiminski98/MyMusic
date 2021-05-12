import { render, screen } from "@testing-library/react";
import React from "react";
import { Input } from "./FormField.styles";

describe("Input", () => {
  it("renders", () => {
    render(<Input placeholder="firstName" />);
    screen.getByPlaceholderText("firstName");
  });
});
