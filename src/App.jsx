import { useState, useEffect, useRef, useLayoutEffect, useReducer } from 'react'
import './App.css'
import { createTenziCollection, tenziBuilder } from "./utils/tenziBuilder.js"
import { CongratsSign } from "./components/CongratsSign"
import { Die } from "./components/Die"
import { positionDice } from "./utils/circlePositioner.js"
import AwesomeButton from './components/AwesomeButton.jsx';
import { diceInGame } from './constants.js'
import Stopwatch from './components/Stopwatch/Stopwatch.jsx'
import { tenziesReducer } from './reducers/tenziesReducer.js'

// TODO: Consider adding a game state enum (PLAYING, PAUSED, WON) instead of multiple boolean states
function App() {
  const [gameWon, setGameWon]         = useState(false)
  const [tenzies, dispatch]           = useReducer(tenziesReducer, createTenziCollection(diceInGame));
  const [rolledTimes, setRolledTimes] = useState(0)
  const tenziValuesArray              = Object.values(tenzies).map(tenzi => tenzi.value)
  const tenziRefs                     = Object.fromEntries(Object.keys(tenzies).map(tenziId => [tenziId, useRef(null)]))
  const playboardRef                  = useRef(null)
  const [stopwatchRunning, setStopwatchRunning] = useState(true)

  const rollDice = () => {
    dispatch({ type: "ROLL_DICE", tenziRefs });
    setRolledTimes(prev => prev + 1);
  }

  const lockDie = (e) => {
    dispatch({ type: "LOCK_DIE", tenziId: e.currentTarget.getAttribute("data-id") })
  }

  const checkIfWon = () => { 
    if (tenziValuesArray.some(tenziValue => tenziValue !== tenziValuesArray[0])) return
    setGameWon(true)
    setStopwatchRunning(false)
  }
  useEffect(checkIfWon, [tenziValuesArray])

  const resetGame = () => {
    dispatch({ type: "INIT" });
    setGameWon(false)
  }

  useLayoutEffect(() => {
    positionDice(playboardRef.current)
  }, [])

  return (
    <>
      <div className="tenzi-playboard" ref={ playboardRef }>
        { Object.entries(tenzies).map(([tenziId, tenziAttrs]) => {
            return <Die key={ tenziId } 
                        tenziId={ tenziId} 
                        ref={ tenziRefs[tenziId] } 
                        isLocked={ tenziAttrs.isLocked } 
                        currentValue={ tenziAttrs.value } 
                        onClick={ lockDie }/>
            }
          )
        }
        <div className="controls">
          <Stopwatch isRunning={ stopwatchRunning }/>
          <AwesomeButton className="roll-dice-button" onMouseUp={ rollDice }>Roll Dice</AwesomeButton>
          <div className="rolled-times-sign">Rolled <span>{ rolledTimes }</span> times</div>
        </div>
      </div>
      { gameWon && <CongratsSign resetGame={ resetGame }/>}
    </>
  )
}

export default App
