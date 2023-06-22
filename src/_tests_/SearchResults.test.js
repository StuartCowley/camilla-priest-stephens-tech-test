import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const validProps = {
    setSearchResults: jest.fn()
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchResults
        setSearchResults={validProps.setSearchResults} 
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct text", () => {
    render(
      <SearchResults
        setSearchResults={validProps.setSearchResults} 
      />
    );
    expect(screen.getByText("Search Results")).toBeInTheDocument();
  });
});

