import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, Container, Image, Button } from "semantic-ui-react";

export const buttonStyle = {
    background: '#FFDE64',
    color: '#fff',
    textShadow: '1px 1px 3px #000',
    boxShadow: '1px 1px 3px #000',
    marginRight: '1.5rem'
}


const NavBar = ({ logo, homeUrl }) => {

    return (
        <Menu borderless>
            <Container style={{ height: '100px' }}>
                <Menu.Item as="a" href="/">
                    <Image src={logo} size="small" />
                </Menu.Item>
                <Menu.Item position="right">
                    <a href={homeUrl}>
                        <Button style={buttonStyle} className="tertiary">Home</Button>
                    </a>


                    <>
                        <Link to="/register">
                            <Button style={buttonStyle} className="tertiary">Register</Button>
                        </Link>
                        <Link to="/">
                            <Button style={buttonStyle} className="tertiary">Login</Button>
                        </Link>
                    </>

                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default NavBar