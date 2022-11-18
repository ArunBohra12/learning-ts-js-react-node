import React, { useState, useRef } from 'react';
import Circle from './components/circle/circle.component';

import './App.css';

type Pos = {
  x: number;
  y: number;
};

function App() {
  const [circles, setCircles] = useState<Array<Pos>>([]);
  const appElement = useRef<HTMLDivElement>(null);

  const { current: redoStack } = useRef<Array<Pos>>([]);

  const handleCreateCircle = (e: React.MouseEvent) => {
    if (appElement.current !== e.target) return;

    const { clientX, clientY } = e;

    const circle = { x: clientX, y: clientY };
    setCircles(prev => [...prev, circle]);
  };

  const undoHandler = () => {
    setCircles(prev => {
      const removedItem = prev[prev.length - 1];

      if (removedItem) redoStack.push(removedItem);
      return prev.slice(0, -1);
    });
  };

  const redoHandler = () => {
    if (redoStack.length === 0) return;

    setCircles(prev => {
      const latestItem = redoStack[redoStack.length - 1];

      redoStack.pop();
      return [...prev, latestItem];
    });
  };

  return (
    <div ref={appElement} className='App' onClick={handleCreateCircle}>
      <button onClick={undoHandler} disabled={circles.length === 0}>
        Undo
      </button>
      &nbsp;
      <button onClick={redoHandler} disabled={redoStack.length === 0}>
        Redo
      </button>
      {circles.map((circle, i) => (
        <Circle key={i} pos={{ x: circle.x, y: circle.y }} />
      ))}
    </div>
  );
}

export default App;
