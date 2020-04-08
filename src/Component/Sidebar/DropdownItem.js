
import React, { Component } from 'react';

//bootstrap component
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';


// scss for array
import style from "./DropdownItem.module.scss";


export default class DropdownItem extends Component {
    
    render() {
        return (
            <>
                {
                    
                    this.props.item.map(
                    (data, i) => {
                        return (
                            <LinkContainer to={data[1]}  key={i} activeClassName={style.drapdownactiveClass} >
                                <Nav.Link key={i} className={style.NavLinks} >
                                    {data[0]}
                                </Nav.Link>
                            </LinkContainer>
                        )
                        
                    }
                 )
                }
            </>
        )
    }
}
