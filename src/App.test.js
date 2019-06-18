import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
//import "jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";

describe("App()", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders successfully", () => {
    render(<App />);
    // if there are errors rendering the component test will fail.
  });

  it("renders without failing", () => {
    const queries = render(<App />);
    queries.getByText(/hello world/);
    // if there are errors rendering the component test will fail.
  });

  it.todo("Does this work??");

  //show an h2 with hello world

  it("renders hello world!", () => {
    const { getByText, findByText, queryByText, debug } = render(<App />);
    getByText(/hello world/i);
    expect(getByText(/hello world/i)).not.toBeNull();
  });

  it("greets the team", () => {
    const { findByText, getByText, queryByText } = render(<App />);
    const button = getByText(/Greet/i);
    fireEvent.click(getByText(/greet/i));
    //fireEvent(button, "click");
    getByText(/hello web19/i);
  });
});
