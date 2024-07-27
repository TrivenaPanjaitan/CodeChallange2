import { fireEvent, render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import HomePage from "../pages/index";
fetchMock.enableMocks();

// Set up before each test
beforeEach(() => {
  fetchMock.resetMocks();
});

test("searches for books", async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify({
      items: [
        {
          id: "1",
          volumeInfo: {
            title: "Test Book",
            authors: ["Author Name"],
            imageLinks: { thumbnail: "http://example.com/cover.jpg" },
          },
        },
      ],
    })
  );

  render(<HomePage />);

  // Trigger the search
  fireEvent.change(screen.getByPlaceholderText("Search for books..."), {
    target: { value: "flowers" },
  });
  fireEvent.click(screen.getByText("Search"));

  // Add some debug output
  console.log(screen.debug()); // This will print the current HTML to the console

  // Wait for the text to appear
  await screen.findByText("Test Book");

  // Confirm it is in the document
  expect(screen.getByText("Test Book")).toBeInTheDocument();
});
