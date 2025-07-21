import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import Pagination from "../../components/Pagination";

import store from "../../redux/store";

describe("Pagination Test", () => {
  it("Pagination correct info", () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    const paginationElement = screen.getByTestId("pagination");

    expect(paginationElement).toHaveClass("pagination");

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("34")).toBeInTheDocument();
  });
});
