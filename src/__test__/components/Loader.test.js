import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "../../components/Loader";

describe("Loader Component", () => {
  test("render the loader text", () => {
    render(<Loader />);
    const loaderElement = screen.getByText(/loading.../i);
    expect(loaderElement).toBeInTheDocument();
  });

  test("has the loader class", () => {
    render(<Loader />);

    const loaderElement = screen.getByTestId("loader");
    expect(loaderElement).toHaveClass("loader");
  });
});
