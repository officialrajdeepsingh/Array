
import React, { Component } from 'react';
import DropdownItem from './DropdownItem';

// bootstrap component
import Nav from 'react-bootstrap/Nav';


// scss for array
import style from "./Dropdown.module.scss";


export default class Dropdown extends Component {


    constructor(props) {
        super(props);
        this.state = {
            dropDown: false,
            Hover: false,
            navItem:this.props.item  

        }
    }

    dropdownClickHandler = () => {
        this.setState({
            dropDown: !this.state.dropDown,
            Hover: true,
        })
    }
    mouseEnterHandler = () => {
       if(!this.state.dropDown)
        this.setState({
            Hover: true
  
        })
    }
    mouseOutHandler = () => {
        this.setState({
            Hover: false
        })
    }

    mouseEnterComponent = () => {
        this.setState({
            Hover: true
        })
    }
    
    mouseOutComponent = () => {
        this.setState({
            Hover: false
        })
    }

    mouseHoverClick=()=>{
       if(this.state.Hover){
            this.setState({
                Hover: false,
                dropDown: true,
                
            })
       }
    }


    render() {
    // check scroll bar after add class hover on  div
        let addScrollClass=''; 
       
        if(this.props.scroll && true){
            addScrollClass=style.Hover +' '+ style.scroll; 
        }else{
            addScrollClass=style.Hover;
        }
        return (
            <>
                    <Nav.Link onMouseOut={this.mouseOutHandler}  onClick={this.dropdownClickHandler} onMouseOver={this.mouseEnterHandler}    className={style.NavLink}>
                          {this.props.Name}
                    </Nav.Link>
             
                  
                        {/* component  show when on click */}
                    <div className={this.state.dropDown ? style.dropDown : 'd-none'}>
                         <DropdownItem  item={this.state.navItem} />
                    </div>

                        {/* component show when on hover */}
                    <div onMouseOver={this.mouseEnterComponent} onClick={this.mouseHoverClick} onMouseOut={this.mouseOutComponent} className={this.state.Hover? addScrollClass : 'd-none'}>
                         <DropdownItem className={style.NavLink} activeClass={style.drapdownactiveClass} item={this.state.navItem} />
                    </div>
            </>
        )
    }
}
