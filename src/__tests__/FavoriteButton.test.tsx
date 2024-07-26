import { render, screen, fireEvent } from "@testing-library/react";
import FavoriteButton from "../components/FavoriteButton";

test("toggles favorite status", () => {
  render(<FavoriteButton bookId="1" />);
  const button = screen.getByText("Favorite");
  fireEvent.click(button);
  expect(button).toHaveTextContent("Unfavorite");
});
