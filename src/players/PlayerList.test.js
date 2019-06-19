import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import PlayerList from "./PlayerList";

describe("playerlist()", () => {
  it("should show no players if none passed", () => {
    const { getByText } = render(<PlayerList />);
  });

  it("Display all the players provided", () => {
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

    const renderedPlayers = getAllByTestId(/players/i);

    expect(renderedPlayers).toHaveLength(players.length);
  });

  it("Display all the players provided", () => {
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
    const playerNames = players.map(p => p.name);
    const renderedPlayers = getAllByTestId(/players/i).map(
      li => li.textContent
    );

    expect(renderedPlayers).toEqual(playerNames);
  });
});
