import React, { Component } from 'react';
import Account from './Account';
import Search from './Search';
import Notify from './Notify';


//react-bootstrap copomponent
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




// scss for array
import style from './DefaultHeader.module.scss';


export default class DefaultHaeder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      SearchShow: false,
      account:false
    }
  }

  notifyHandler = () => {
    this.setState({
      notify: !this.state.notify
    })
  }
 
  imageHandler=()=>{
    console.log(' hey')
    this.setState({
      account:!this.state.account
    })
  }


  render() {
    return (
      <>
          <Row className={style.bg} >

            <Col sm={12} xl={4} xs={12} md={12} lg={4}></Col> 

            <Col sm={8} xl={4} xs={8} md={8} lg={4} className='d-flex justify-content-sm-start' >
            
                <Search/>
                <Notify />
            
            </Col>

           

            <Col sm={4} xl={4} xs={4} md={4} lg={4} className='border-left d-flex border-white  justify-content-end  '>
              
                <Navbar.Text className={style.author}>
                  James Smith
                </Navbar.Text>
                  <div className="mr-1">   
                    <div className={style.bgImage} onClick={this.imageHandler}></div>
                      <div className={this.state.account ? style.account : style.none} > 
                          <div> 
                            {
                              this.state.account ? <Account /> : ''
                            }
                          </div>
                      </div>  
                    </div>
                 
              
            </Col>

          </Row>
        
      </>
    )
  }
}

