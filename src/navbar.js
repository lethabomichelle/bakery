import Nav from 'react-bootstrap/Nav';
import './navbar.css';
// import { Link } from 'react-router-dom'




function Navbar() {
    return (
        <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home" class="nav-link active">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/menu" class="nav-link active">MENU</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/aboutus" class="nav-link active">ABOUT US</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contactus" class="nav-link active">CONTACT US</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;