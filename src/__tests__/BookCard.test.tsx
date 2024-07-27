import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import BookCard from "../components/BookCard";
import { Book } from "../types/book";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockBook: Book = {
  id: "1",
  volumeInfo: {
    title: "Test Book",
    authors: ["Test Author"],
    imageLinks: { thumbnail: "test-thumbnail-url" },
  },
};

test("renders BookCard component", () => {
  (useRouter as jest.Mock).mockReturnValue({
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
  });
  render(<BookCard book={mockBook} />);
  expect(screen.getByText("Test Book")).toBeInTheDocument();
  expect(screen.getByText("Test Author")).toBeInTheDocument();
  expect(screen.getByAltText("Test Book")).toBeInTheDocument();
});
