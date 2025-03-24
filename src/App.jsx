import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import './App.css'
import './Die.css'
import { tenziCollectionBuilder, tenziBuilder } from "./utils/tenziBuilder.js"
import { CongratsSign } from "./components/CongratsSign"
import { Die, animateDieRoll } from "./components/Die"
import { randomDieValue } from './utils/randomizer'
import { positionDice } from "./utils/circlePositioner.js"
import AwesomeButton from './components/AwesomeButton.jsx';
import { diceInGame } from './constants.js'
import Stopwatch from './components/StopWatch/Stopwatch.jsx'

function App() {
  const [gameWon, setGameWon]         = useState(false)
  const [tenzies, setTenzies]         = useState(tenziCollectionBuilder(diceInGame))
  const [rolledTimes, setRolledTimes] = useState(0)
  const tenziValuesArray              = Object.values(tenzies).map(tenzi => tenzi.value)
  const tenziRefs                     = Object.fromEntries(Object.keys(tenzies).map(tenziId => [tenziId, useRef(null)]))
  const playboardRef                  = useRef(null)
  const [stopwatchRunning, setStopwatchRunning] = useState(true)

  const rollDice = () => {
    const tenziesNew = {}
    Object.entries(tenziRefs).forEach(([tenziId, tenziRef]) => {
      const currentTenzi = tenzies[tenziId]
      if (currentTenzi.isLocked) return

      var newDieValue = randomDieValue();
      animateDieRoll(tenziRef.current, newDieValue)
      tenziesNew[tenziId] = {...currentTenzi, value: newDieValue }
    })
    setRolledTimes(rolledTimes + 1)
    setTenzies({...tenzies, ...tenziesNew})
  }

  const lockDie = (e) => {
    const tenziId = e.currentTarget.getAttribute("data-id")
    const currentTenzi = tenzies[tenziId]
    setTenzies({...tenzies, [tenziId]: {...currentTenzi, isLocked: !currentTenzi.isLocked } })
  }

  const checkIfWon = () => { tenziValuesArray.every(tenziValue => tenziValue === tenziValuesArray[0]) && setGameWon(true) && setStopwatchRunning(false) }
  useEffect(checkIfWon, tenziValuesArray)

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
          <div className="rolled-times-sign">Rolled<span>{ rolledTimes }</span>times</div>
        </div>
        
      </div>
      { gameWon && <CongratsSign resetGame={ () => { setTenzies(tenziCollectionBuilder(diceInGame)); setGameWon(false) } }/>}
    </>
  )
}

export default App
