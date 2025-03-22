import { Fireworks } from '@fireworks-js/react'

export function CongratsSign({resetGame}) {
  return (
    <div className="congrats-sign-container">
      <div className="congrats-sign">
      
        <h1>Congrats! You've won.</h1>
        <button onClick={ resetGame }>Play again</button>
      </div>
      <Fireworks
        className='congrats-fireworks'
        options={{ opacity: 0.5 }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed'
        }}
        />
    </div>
  )
}