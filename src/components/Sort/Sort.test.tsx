import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Sort from "./Sort";
import { itemMocks } from "../../mocks/mocks";

describe("Given a Sort component", () => {
  const onSort = vi.fn();
  const onClear = vi.fn();

  describe("When it is rendered", () => {
    test("Then it should show a select with the text 'sort by input order'", async () => {
      const expectedText = "Sort by input order";

      render(
        <Sort
          onSort={onSort}
          onClear={onClear}
          items={itemMocks}
          sortBy="input"
        />,
      );

      const select = screen.getByRole("combobox");
      await userEvent.selectOptions(select, ["input"]);
      const option = screen.getByText(expectedText);

      expect(option).toBeInTheDocument();
    });
  });

  describe("When the 'clear list' button is clicked", () => {
    test("Then it should call the handleOnClear function", async () => {
      render(
        <Sort
          onSort={onSort}
          onClear={onClear}
          items={itemMocks}
          sortBy="input"
        />,
      );

      const button = screen.getByRole("button", { name: "clear list" });
      await userEvent.click(button);

      expect(onClear).toHaveBeenCalled();
    });
  });
});
