import React from "react";

export default function PlayerList({ players = [] }) {
  if (!players.length) {
    return <h2>No players to displaye</h2>;
  }
  return (
    <ul>
      {players.map(p => (
        <li key={p.id} data-testid="/players/">
          {p.name}
        </li>
      ))}
    </ul>
  );
}
