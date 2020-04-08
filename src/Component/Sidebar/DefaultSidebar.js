import React, { Component } from 'react';
import Dropdown from './Dropdown'


// all compoenent from react bootsrap
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { LinkContainer } from 'react-router-bootstrap';


// scss for array
import style from "./DefaultSidebar.module.scss";

// Logo for Array
import Logo from '../Image/Logo.svg';



export default class DefaultSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PostItem: [
                [ "All Posts", "/post"],
                [ "New Post", "/editor"  ],
                [  "Categories", "/categories"]
            ],
            ComponentItem: [
                ["Login", "/login"],
                ["Signup", "/signup"],
                ["404", "/notfound"],
                ["Form" , "/form"],
                ["Card" , "/card"],
                ["Color Picker" , "/colorpicker"],
                ["Button" , "/button"],
                ["Right Click Menu" , "/rightclick"],
                ["Icon" , "/icon"]
            ]
        }
    }
  
    
    render() {

        return (
            <>
                <Navbar collapseOnSelect sticky="top" className='flex-column' expand="lg">


                    <LinkContainer to="/" >
                        <Image className={style.width} src={Logo} alt="logo for Array" fluid />
                    </LinkContainer>

                    <Navbar.Toggle className={style.navbartogglers} aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className={style.flexcolumn}>

                            <LinkContainer exact activeClassName={style.activeClass} to="/">
                                <Nav.Link className={style.NavLink} >
                                    Home
                                                    </Nav.Link>
                            </LinkContainer>


                            <Dropdown Name='Post'  item={this.state.PostItem} />
                            <Dropdown Name='Component' scroll='true'  item={this.state.ComponentItem} />


                            <LinkContainer to="/stats" activeClassName={style.activeClass}>
                                <Nav.Link className={style.NavLink} >
                                    Stats
                                </Nav.Link>
                            </LinkContainer>
                            <div className={style.spreate}></div>

                            <LinkContainer to="/settings" activeClassName={style.activeClass}>
                                <Nav.Link className={style.NavLink} >
                                    Settings
                                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/subscription" activeClassName={style.activeClass}>
                                <Nav.Link className={style.NavLink} >
                                    Subscription
                                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/signup" activeClassName={style.activeClass}>
                                <Nav.Link className={style.NavLink} >
                                    Logout
                                            </Nav.Link>
                            </LinkContainer>

                        </Nav>

                    </Navbar.Collapse>

                </Navbar>


            </>
        )
    }
}


