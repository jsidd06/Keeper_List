import React from 'react'
import { Button } from 'reactstrap';

function MakeNotes(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Button>
        <i class="fa-solid fa-circle-minus"></i>
      </Button>
    </div>
  );
}

export default MakeNotes