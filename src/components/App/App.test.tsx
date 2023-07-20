import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given a App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'packsplorer'", () => {
      const expectedText = "🌴 PackSplorer🌴";

      render(<App />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
