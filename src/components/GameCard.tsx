import { useState } from 'react';

interface GameCardProps {
  title: string;
  description: string;
  initialLevel?: number;
}

export default function GameCard({ title, description, initialLevel = 1 }: GameCardProps) {
  const [level, setLevel] = useState(initialLevel);
  
  const handleLevelUp = () => {
    setLevel(prevLevel => prevLevel + 1);
  };
  
  return (
    <div className="game-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="game-stats">
        <span>Level: {level}</span>
        <button onClick={handleLevelUp}>Level Up</button>
      </div>
    </div>
  );
} 