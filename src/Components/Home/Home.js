import React, { useState } from 'react'
import { Card, Container, Form, Input } from 'reactstrap'
import Header from '../Header/Header'

function Home() {

    const [note,setNote] = useState({
        title: '',
        content: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
       
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

  return (
    <>
      <Header />
      <Container>
        <Card>
          <Form>
            <Input placeholder="type the title .." value={note.title}  name="title" onChange={handleChange} />
            <textarea placeholder="type the detail of notes" rows={3} name="textarea" value={note.content} onChange={handleChange} />
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default Home