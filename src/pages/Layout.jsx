import { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Nav, NavItem, Navbar, NavbarToggler } from "reactstrap";

export default function Layout({children, links}){
    const [isOpen, setIsOpen] = useState(false);

    const renderedLinks = links.map((link, index) => {
        return <NavItem key={index}>
            <Link to={link.to}>{link.label}</Link>
        </NavItem>
    })  

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar>
                <NavbarToggler/>
                <Collapse onClick={toggle}>
                    <Nav>
                        {renderedLinks}
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}