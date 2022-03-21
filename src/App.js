import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import MakeNotes from './Components/MakeNotes/MakeNotes'

function App() {
  const [addNote, setAddNode] = useState([])

  const addNoteHandler = (newNote) => {
    setAddNode(prevNote => {
      return [...prevNote, newNote]
    })
  }
  return (
    <>
      <Header />
      <Home onAdd={addNoteHandler} />
     {addNote.map((note, index) => {
        return <MakeNotes key={index} title={note.title} content={note.content}  />
      })}
    </>
  );
}

export default App