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

  const deleteNoteHandler = (id) => {
    setAddNode(prevNote => {
      return prevNote.filter((noteItem, index) => {
        return index !== id
      })
    })
  }

  return (
    <>
      <Header />
      <Home onAdd={addNoteHandler} />
     {addNote.map((note, index) => {
        return <MakeNotes key={index} id={index} title={note.title} content={note.content} onDelete={deleteNoteHandler} />
      })}
    </>
  );
}

export default App