import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/HeaderBand";
import CounterCard from "./components/CounterCard";
import ApiForms from "./components/ApiForms"

function App() {
  return (
    <>
      <Header />

      <Container 
        xs="fluid"
        style={{
          backgroundColor: '#FFF', 
          minHeight: 'calc(100vh - 60px)', 
          overflow: 'auto'
          }}
        className="py-2"
      >

        <Row>
          <Col xs={12} md={8}>
            {/* Showing form with api integration */}
            <ApiForms></ApiForms>           
          </Col>
          <Col xs={12} md={4}>
            <CounterCard></CounterCard>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default App
