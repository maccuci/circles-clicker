import React, { useState } from 'react'
import './App.css'

type CoordinatesProps = {
  clientX: number
  clientY: number;
}

function App() {
  const [coordinates, setCoordinates] = useState<CoordinatesProps[]>([]);

  function getCoordinates(e: React.MouseEvent<HTMLElement>) {
    const { clientX, clientY } = e;

    setCoordinates([...coordinates, { clientX, clientY }]);
    console.log(coordinates);
  }

  function resetCoordinates() {
    setCoordinates([]);
  }

  function generateColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  return (
    <>
      <h1>Circles Clicker</h1>
      <button disabled={coordinates.length === 0} onClick={resetCoordinates}>Reset Circles</button>
      <div className='App' onClick={getCoordinates}>
        {
          coordinates.map((coordinate, i) => {
            return <div
              key={i}
              style={{
                position: 'absolute',
                left: coordinate.clientX - 6,
                top: coordinate.clientY - 6,
                borderRadius: '50%',
                width: '0.5em',
                height: '0.5em',
                backgroundColor: `#${generateColor()}`,
              }}>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App;
