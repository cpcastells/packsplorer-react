import { render, screen } from "@testing-library/react";
import PackingList from "./PackingList";
import { itemMocks } from "../../mocks/mocks";

describe("Given a PackingList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'What's in your bag?'", () => {
      const expectedText = "What's in your bag?";

      render(<PackingList items={itemMocks} />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
