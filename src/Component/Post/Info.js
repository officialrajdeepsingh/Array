import React, { Component } from 'react';


//bootstarp Component
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

//scss
import style from "./info.module.scss";

export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
          postInfo:false
    
        }
      }
      postHandler=()=>{
        this.setState({
             postInfo:!this.state.postInfo
        })        
      }
      render(){

        let getID =this.props.Id || 0
          
          return( 
            <>
                <span className={style.customCursor} onClick={this.postHandler}>   &#8285; </span>
                  <div className={ this.state.postInfo? style.customDropdown : 'd-none' }>
                    <Nav className="flex-column">
                   
                      <LinkContainer to='/editor'>
                         <Nav.Link className={style.li}>Edit</Nav.Link>
                      </LinkContainer>

                        <Nav.Link onClick={this.props.checkClick.bind(this, {getID}) }className={style.li} >Delect</Nav.Link>
                        <Nav.Link className={style.li} onClick={this.props.modelShow} >Share</Nav.Link>
                    </Nav>
                </div>
               
            </>
          )    
      }
}



                                         