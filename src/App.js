import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

function App() {
  const [addNote, setAddNode] = useState([])

  // const addNoteHandler = (note) => {
  //   setAddNode(prevNote => {
  //     return [...prevNote, note]
  //   })
  // }

  return (
    <>
      <Header />
      <Home onAdd={addNote} />
    </>
  );
}

export default App