import { render, screen } from "@testing-library/react";
import Item from "./Item";
import { itemMock } from "../../mocks/mocks";
import { vi } from "vitest";

describe("Given a Item component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text '❌'", () => {
      const expectedText = "❌";
      const toggleItem = vi.fn();

      render(<Item item={itemMock} onToggleItem={() => toggleItem} />);

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});
