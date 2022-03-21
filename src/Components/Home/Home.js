import React, { useState } from 'react'
import { Button, Card, Container, Form, Input } from 'reactstrap'
import Header from '../Header/Header'

function Home(props) {

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

    const submitNote = (e) => {
        e.preventDefault();
      props.onAdd(note)
      setNote({
          title: '',
          content: ''
      })
    }

  return (
    <>
      <Header />
      <Container>
        <Card>
          <Form>
            <Input
              placeholder="type the title .."
              value={note.title}
              name="title"
              onChange={handleChange}
            />
            <textarea
              placeholder="type the detail of notes"
              rows={3}
              name="content"
              value={note.content}
              onChange={handleChange}
            />
            <Button onClick={submitNote}>
              <i className="fa-solid fa-plus"></i>
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default Home