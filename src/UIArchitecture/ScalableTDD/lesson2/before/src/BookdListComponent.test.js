import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookListComponent from "./BookListComponent";

const mockLoadData = jest.fn();
export const mockBooks = [
  { bookId: 1, name: "Introduction to Algorithms" },
  { bookId: 2, name: "Clean Code" },
  { bookId: 3, name: "Clean Architecture" }
];

beforeEach(() => {
  jest.clearAllMocks();
});

it("should load data", () => {
  render(<BookListComponent loadData={mockLoadData} />);

  expect(mockLoadData).toHaveBeenCalled();
});

/*

it("should display no books if no books available", () => {
  render(<BookListComponent loadData={mockLoadData} />);

  expect(screen.getByTestId("book-list")).toBeEmptyDOMElement();
});

it("should display books if books available", () => {
  render(<BookListComponent books={mockBooks} loadData={mockLoadData} />);
  const parentContainer = screen.getByTestId("book-list");
  const childElements = screen.queryAllByRole("listitem", {
    container: parentContainer
  });
  expect(childElements[0]).toHaveTextContent("Introduction to Algorithms");
  expect(childElements[1]).toHaveTextContent("Clean Code");
  expect(childElements[2]).toHaveTextContent("Clean Architecture");
});
*/