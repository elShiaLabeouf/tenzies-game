import { useState } from 'react'
import './App.css'
import { tenziCollectionBuilder, tenziBuilder } from "./tenzi_builder"

function App() {
  const [tenzies, setTenzies] = useState(tenziCollectionBuilder(10))
  
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
      </div>
    </>
  )
}

export default App
