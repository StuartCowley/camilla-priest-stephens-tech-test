import { render } from "@testing-library/react";
import axios from "axios";
import Search from "../components/Search";

describe("Search", () => {
  it("renders correctly", async () => {

    const validProps = {
      setSearchResults: jest.fn()
    };

    const mockData = {
      searchResults: ["https://unsplash.com/photos/uIf6H1or1nE", "https://unsplash.com/photos/wCujVcf0JDw"]
    }

    jest.spyOn(axios, "get").mockResolvedValue(mockData);
    const { asFragment } = await render(<Search setSearchResults={validProps.setSearchResults}/>);
    
    expect(asFragment()).toMatchSnapshot();
  });
});

