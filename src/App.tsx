import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GameCard from './components/GameCard'
import './App.css'
import './components/GameCard.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Brad's Meta Game</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Score: {count}
        </button>
        <p>
          Welcome to your new React 19 application! You're using the latest React version with TypeScript and Vite.
        </p>
      </div>
      
      <div className="game-container">
        <GameCard 
          title="Quest One" 
          description="Complete this quest to unlock more features." 
          initialLevel={3}
        />
        <GameCard 
          title="Daily Challenge" 
          description="A new challenge every day to keep your skills sharp."
        />
        <GameCard 
          title="Boss Fight" 
          description="Challenge the boss to earn special rewards."
          initialLevel={5}
        />
      </div>
      
      <p className="read-the-docs">
        Built with React 19, TypeScript, and Vite
      </p>
    </>
  )
}

export default App
