import Nav from 'react-bootstrap/Nav';
import './navbar.css';
// import { Link } from 'react-router-dom'




function Navbar() {
    return (

        <Nav fill fixed variant="tabs" className='text-dark' >
            <Nav.Item>
                <Nav.Link href="/homepage" class="nav-link active text-dark">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/menu" class="nav-link active text-dark">Menu</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/aboutus" class="nav-link active text-dark">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contactus" class="nav-link active text-dark">Contact Us</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;