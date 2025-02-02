import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { BsPlusLg, BsFilePlus, BsFileMinus } from "react-icons/bs";
import { useState } from 'react';

function CounterCard() {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter+1);
  }

  function decreaseCounter() {
    setCounter(counter-1);
  }

  return (
    <Card className='w-25 text-center'>
      <Card.Header as="h5">Counter Card</Card.Header>
      
      <Card.Body>
        <Card.Title>Counter: {counter}</Card.Title>
        <Card.Text>
          Is counter value even/odd {counter}
        </Card.Text>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-around'>
        <Button variant="primary" onClick={increaseCounter}>
          +
        </Button>
        <Button variant="danger" onClick={decreaseCounter} disabled={counter === 0}>
          -
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default CounterCard;