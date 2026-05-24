import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavbarBrand } from 'react-bootstrap';
import { NavLink, Link } from "react-router";

function MyNavbar() {
    return (
        <Navbar sticky='top' bg='dark'>
            <Container fluid>
                <Navbar.Brand className='text-body' as={Link} to='/'>My Portfolio</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link className='text-body' as={NavLink} to='/soon'>My Resume</Nav.Link>
                    <Nav.Link className='text-body' as={NavLink} to='/soon'>Contact me</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MyNavbar