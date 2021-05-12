import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Add contractor", () => {
  render(<Form />);
  it("Sends properly", () => {
    fireEvent.change(screen.getByTestId("type"), {
      target: { value: 1 },
    });
    fireEvent.change(screen.getByTestId("peselNip"), {
      target: { value: "12345678912" },
    });
    expect(screen.getByTestId("peselNip").value).toBe("12345678912");
    fireEvent.click(screen.getByText("Submit"));
  });
});
