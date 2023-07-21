import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'add'", () => {
      const expectedText = "add";

      render(<Form onAddItem={() => ({})} />);

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});
