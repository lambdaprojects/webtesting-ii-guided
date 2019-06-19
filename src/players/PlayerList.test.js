import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import PlayerList from "./PlayerList";

describe("playerlist()", () => {
  it("should show no players if none passed", () => {
    const { getByText } = render(<PlayerList />);
  });

  it("Display the list of players", () => {
    const players = [
      {
        id: 1,
        name: "name1"
      },
      {
        id: 2,
        name: "name2"
      }
    ];
    const { getAllByTestId } = render(<PlayerList players={players} />);
    getAllByTestId(/players/i);
  });
});
