import { useState, useEffect, useRef } from 'react'
import './App.css'
import { tenziCollectionBuilder, tenziBuilder } from "./tenzi_builder"
import { CongratsSign } from "./components/CongratsSign"

const diceAmount = 3

function App() {
  let [gameWon, setGameWon] = useState(false)
  const [tenzies, setTenzies] = useState(tenziCollectionBuilder(diceAmount))
  const tenziValuesArray = Object.values(tenzies).map(tenzi => tenzi.value)

  const rollTenzies = () => {
    const newTenziCollection = Object.assign({},
      ...Object.entries(tenzies).map(([tenziId, tenziAttrs]) => { 
        return tenziAttrs.isLocked ? { [tenziId]: tenziAttrs } : tenziBuilder(tenziId) 
      })
    )
    setTenzies(newTenziCollection)
  }

  const lockDice = (e) => {
    const tenziId = e.currentTarget.getAttribute("data-id")
    const currentTenzi = tenzies[tenziId]
    setTenzies({...tenzies, [tenziId]: {...currentTenzi, isLocked: !currentTenzi.isLocked } })
  }

  useEffect(() => {
    if (tenziValuesArray.every(tenziValue => tenziValue === tenziValuesArray[0])) setGameWon(true)
    
  }, tenziValuesArray)

  return (
    <>
      <div className="tenzi-playboard">
        { Object.entries(tenzies).map(([tenziId, tenziAttrs]) => {
            return (<div key={ tenziId }
                         className="tenzi-dice"
                         data-locked={ tenziAttrs.isLocked }
                         data-id={ tenziId }
                         onClick={ lockDice }>
                      { tenziAttrs.value }
                    </div> 
                    ) 
            }
          )
        }
        <button onClick={ rollTenzies }> Roll Tenzies</button>
        { gameWon && <CongratsSign resetGame={ () => { setTenzies(tenziCollectionBuilder(diceAmount)); setGameWon(false) } }/>}
      </div>
    </>
  )
}

export default App
