import Nav from 'react-bootstrap/Nav';
import './navbar.css';



function Navbar() {
    return (
        <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Menu</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="about">About us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="contact" >
                    Contact
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;