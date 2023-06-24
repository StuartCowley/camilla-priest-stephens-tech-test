import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const validProps = {
    searchResults: ["https://unsplash.com/photos/uIf6H1or1nE", "https://unsplash.com/photos/wCujVcf0JDw"]
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchResults
        results={validProps.searchResults} 
      />
    );
    
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of images", () => {
    render(
      <SearchResults
        results={validProps.searchResults} 
      />
    );

    expect(screen.getAllByTestId("search-results__image")).toHaveLength(2);
  });


});




