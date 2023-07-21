import { render, screen } from "@testing-library/react";
import PackingList from "./PackingList";
import { itemMocks } from "../../mocks/mocks";
import { vi } from "vitest";

describe("Given a PackingList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'What's in your bag?'", () => {
      const expectedText = "What's in your bag?";
      const toggleItem = vi.fn();
      const deleteItem = vi.fn();

      render(
        <PackingList
          items={itemMocks}
          onToggleItem={toggleItem}
          onDeleteItem={deleteItem}
          sortBy="input"
        />,
      );

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
