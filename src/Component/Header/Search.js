
import React, { Component } from 'react'

//react-bootstrap copomponent
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


// scss for array
import style from './Search.module.scss';

// Logo for Array
import searchIcon from '../Image/search.svg';


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          SearchShow: false,
         
        }
      }
    
      handlerclick = () => {
        this.setState({
          SearchShow: true
        })
      }
      
     handlerfalseclick = () => {
        console.log('false')
        this.setState({
        SearchShow: false
        })
      
     }

    render() {
        return (
            <div className='d-flex  mr-3 ml-2'>
                        <Image src={searchIcon} className={this.state.SearchShow ? style.iconNone : style.searchIconClass} onClick={this.handlerclick} roundedCircle />
                        <div className={this.state.SearchShow ? style.seachContainer : style.none} >
                          <span onClick={this.handlerfalseclick} >&#10005; </span>
                          <Form>
                            <div className='p-2'>
                              <input type="text" name="serach" placeholder="Type to Search" />
                              <Button> Submit </Button>
                            </div> 
                          </Form>
                        </div>
              </div>
        )
    }
}
