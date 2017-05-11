import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default class CustomNavbar extends React.Component {
    render() {
        return (
            <div style={{marginBottom: 10}}>
                <Navbar color="faded" light toggleable>
                    <NavbarBrand>react-quiz</NavbarBrand>
                </Navbar>
            </div>
        )
    }
}
