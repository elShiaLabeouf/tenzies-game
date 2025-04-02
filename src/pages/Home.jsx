import { useState } from "react"
import { Link } from "react-router-dom"
import "./Home.css"
import { Button, Select, PasswordInput, Table } from '@mantine/core';
import { IoMdCheckmarkCircle } from "react-icons/io";

const lobbies = [
  { id: "q1w2e3r4", activePlayers: 0, maxPlayers: 10, usingPassword: true},
  { id: "q1w2e3r6", activePlayers: 3, maxPlayers: 10, usingPassword: false},
  { id: "q1w2e3r7", activePlayers: 0, maxPlayers: 10, usingPassword: true},
  { id: "q1w2e3r8", activePlayers: 8, maxPlayers: 10, usingPassword: false},
  { id: "q1w2e3r9", activePlayers: 0, maxPlayers: 10, usingPassword: false},
];

export default function Home() {
  const maxPlayers = 8
  const [selectedLobby, setSelectedLobby] = useState(null)
  const [newGameMaxPlayers, setNewGameMaxPlayers] = useState(1)
  const [newGamePassword, setNewGamePassword] = useState(null)

  const rows = lobbies.map((lobby) => (
    <Table.Tr
      key={lobby.id}
      aira-label="Select a game to play"
      onClick={() => setSelectedLobby(selectedLobby?.id === lobby.id ? null : lobby)}
      bg={selectedLobby?.id === lobby.id ? "var(--mantine-color-blue-light)" : undefined}
    >
      <Table.Td>{lobby.id}</Table.Td>
      <Table.Td>{`${lobby.activePlayers}/${lobby.maxPlayers}`}</Table.Td>
      <Table.Td>{lobby.usingPassword ? <IoMdCheckmarkCircle/> : null}</Table.Td>
    </Table.Tr>
  ))

  return (
    <div className="menu-container">
      <div className="menu-buttons">
        <details>
          <summary className="menu-button">New Game</summary>
          <div className="new-game-section">
            <Select className="players-num-container" defaultValue="1" label="# of players:" data={Array.from({ length: maxPlayers }).map((_, i) => (i + 1).toString())}/>
            <PasswordInput className="password-input-container" label="Password (optional)" />
            <Button component={ Link }
                    to={ { pathname: "game/12345", search: `?playersCount=${newGameMaxPlayers}&password=${newGamePassword}` } }
                    className="start-game-button"
                    variant="filled" 
                    color="gray"> 
              Start 
            </Button>
          </div>
        </details>
        <details>
          <summary className="menu-button">Join a Game</summary>
          <div className="join-game-section">
            <Table className="active-lobbies-table">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Lobby ID</Table.Th>
                  <Table.Th>Active/Max players</Table.Th>
                  <Table.Th>Using Password</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>

            { selectedLobby?.usingPassword && <PasswordInput className="password-input-container" label="Password" />}
            { selectedLobby &&
                <Button component={ Link }
                        to={ `game/${selectedLobby?.id}` }
                         className="start-game-button"
                         variant="filled" color="gray"> 
                  Join
                </Button> }
          </div>
        </details>
        <details>
          <summary className="menu-button">Rules</summary>
          <ul className="rules-section">
            <li>Each player gets ten six-sided dice.</li>  
            <li>Each player rolls their dice.</li>  
            <li>Each player picks a number they want to collect (e.g., all 3s).</li>
            <li>Players keep the dice that match their chosen number by clicking on it and quickly re-roll the rest.</li>
            <li>The first player to have 10 dice showing the same number wins the game</li>
          </ul>
        </details>
      </div>
    </div>
      
  )
};