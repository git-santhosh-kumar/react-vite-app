import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsPatchPlusFill, BsPatchMinusFill } from "react-icons/bs";

function CounterCard() {
  return (
    <Card>
      <Card.Header as="h5">Counter Card</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">
          <BsPatchPlusFill></BsPatchPlusFill>
        </Button>
        <Button variant="danger">
          <BsPatchMinusFill></BsPatchMinusFill>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CounterCard;