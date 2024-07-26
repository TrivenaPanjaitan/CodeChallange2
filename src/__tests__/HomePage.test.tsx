import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "../pages/index";

test("searches for books", async () => {
  render(<HomePage />);
  fireEvent.change(screen.getByPlaceholderText("Search for books..."), {
    target: { value: "flowers" },
  });
  fireEvent.click(screen.getByText("Search"));
  expect(await screen.findByText("Test Book")).toBeInTheDocument();
});
