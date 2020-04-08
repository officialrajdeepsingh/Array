import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';


// reactbootstrap component

import Nav from 'react-bootstrap/Nav'


// scss for array
import style from './Account.module.scss';




export default class Account extends Component {


    render() {


        return (
            <>
                <Nav className="flex-column">
                    <LinkContainer to="/settings">
                        <Nav.Link className={style.accountLink} >Profile</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/settings">
                        <Nav.Link className={style.accountLink} >Settings</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link className={style.accountLink}>Logout</Nav.Link>
                    </LinkContainer>
                </Nav>
            </>
        )
    }
}
