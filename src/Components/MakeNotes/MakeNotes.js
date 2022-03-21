import React from 'react'
import { Button } from 'reactstrap';

function MakeNotes(props) {

    const handleClick = () => {
        props.onDelete(props.id)
    }

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Button onClick={handleClick}>
        <i class="fa-solid fa-circle-minus"></i>
      </Button>
    </div>
  );
}

export default MakeNotes