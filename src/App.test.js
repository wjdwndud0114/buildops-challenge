import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component test", () => {
  test("renders the appbar with menu button", () => {
    const { getByRole } = render(<App />);
    const linkElement = getByRole("button", { name: /Open drawer/i });
    expect(linkElement).toBeVisible();
  });
});
