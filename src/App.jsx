import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/HeaderBand";
import CounterCard from "./components/CounterCard";
import ApiForms from "./components/ApiForms"
import CustomButton from './components/CustomButton'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
          <Col lg={12}>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
              Tab content for Home
            </Tab>
            <Tab eventKey="apiForm" title="API Form">
              {/* Showing form with api integration */}
              <ApiForms></ApiForms>
            </Tab>
            <Tab eventKey="button" title="Custom Buttons">
              <CustomButton />
            </Tab>
            <Tab eventKey="counterCard" title="Counter Card" className="d-flex justify-content-center">
              <CounterCard></CounterCard>
            </Tab>
          </Tabs>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default App
