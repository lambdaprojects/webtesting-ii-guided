import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import PlayerList from "./PlayerList";

describe("playerlist()", () => {
  it("should show no players if none passed", () => {
    const { getByText } = render(<PlayerList />);
  });
});
