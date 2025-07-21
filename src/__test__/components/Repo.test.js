import React from "react";
import { render, screen } from "@testing-library/react";
import Repo from "../../components/Repo";

const mockRepo = {
  ownerName: "Ahmed Al-Farouq",
  avatar: "https://github.com/facebook/react",
  repoName: "Git Star",
  description: "",
  stars: 500,
  issues: 20,
};

describe("Test Repo Component", () => {
  it("Renders repository info correctly", () => {
    render(<Repo {...mockRepo} />);

    expect(screen.getByText(/Ahmed Al-Farouq/)).toBeInTheDocument();
    expect(screen.getByAltText("Ahmed Al-Farouq")).toBeInTheDocument();
    expect(screen.getByText("Git Star")).toBeInTheDocument();
    expect(screen.getByText(/500/i)).toBeInTheDocument();
    expect(screen.getByText(/20/i)).toBeInTheDocument();
  });
});
