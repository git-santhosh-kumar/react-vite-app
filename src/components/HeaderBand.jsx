import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import packageJson from '../../package.json';

export default function Header() {
    
    return (
    <Navbar expand="lg" className="bg-body-tertiary" 
        bg="dark" data-bs-theme="dark"
        sticky="top"
    >
      <Container>
        <Navbar.Brand>React Vite App</Navbar.Brand>
        <Navbar.Toggle aria-controls="rv-navbar-nav" />

        <Navbar.Collapse id="rv-navbar-nav" className="justify-content-end">
            <Navbar.Text>
                v{packageJson.version}
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}