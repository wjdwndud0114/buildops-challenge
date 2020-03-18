import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import Amplify from "aws-amplify";
import exports from "./aws-exports";

// TODO: mock this or API.graphql
Amplify.configure(exports);
describe("App component test", () => {
  test("renders the appbar with menu button", () => {
    const { getByRole } = render(
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
    const linkElement = getByRole("button", { name: /Open drawer/i });
    expect(linkElement).toBeVisible();
  });
});
