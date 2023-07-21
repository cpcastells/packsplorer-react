import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Sort from "./Sort";

describe("Given a Sort component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a select with the text 'sort by input order'", async () => {
      const expectedText = "Sort by input order";
      const onSort = vi.fn();

      render(<Sort onSort={onSort} sortBy="input" />);

      const select = screen.getByRole("combobox");
      await userEvent.selectOptions(select, ["input"]);
      const option = screen.getByText(expectedText);

      expect(option).toBeInTheDocument();
    });
  });
});
