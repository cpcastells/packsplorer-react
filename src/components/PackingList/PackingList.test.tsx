import { render, screen } from "@testing-library/react";
import PackingList from "./PackingList";

describe("Given a PackingList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'What's in your bag?'", () => {
      const expectedText = "What's in your bag?";

      render(<PackingList />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
