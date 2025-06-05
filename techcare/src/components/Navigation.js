import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function Navigation() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="sm"
      fixed="top"
      className="p-2 px-3"
    >
      <Navbar.Brand className="text-light fw-bold">
        TechCare Repair Services
      </Navbar.Brand>
      <Nav className="ms-auto nav-pills">
        <Nav.Link href="#ourServices">Our Services</Nav.Link>
        <Nav.Link href="#theBest">Why We're The Best</Nav.Link>
        <Nav.Link href="#whatWeRepair">What We Repair</Nav.Link>
        <Button
          variant="light"
          className="ms-2 rounded-pill"
          size="sm"
          href="book.html"
        >
          Book Repair
        </Button>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
