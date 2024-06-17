import Nav from 'react-bootstrap/Nav';
import './navbar.css';
// import { Link } from 'react-router-dom'




function Navbar() {
    return (
        <Nav fill fixed variant="tabs" >
            <Nav.Item>
                <Nav.Link href="/homepage" class="nav-link active">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/menu" class="nav-link active">Menu</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/aboutus" class="nav-link active">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contactus" class="nav-link active">Contact Us</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;