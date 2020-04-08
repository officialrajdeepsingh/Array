import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap';


// all compoenent from react bootsrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// scss for array
import style from './Defaultsignup.module.scss';

// Logo for Array
import Logo from '../Image/Logo.svg';

// icon 
import FacebookIcon  from "../Image/Facebookicon.svg";
import TwiterIcon  from "../Image/twitericon.svg";
import GoogleIcon  from "../Image/googleicon.svg";

export default class DefaultLogin extends Component {

 submithander(event){
   event.preventDefault();
  }

    render() {
          
        return (
            <>
              <Container fluid={true}  >
                  <Row>

                    <Col sm={12} xl={6} xs={12} md={6} lg={6} className={style.bg}>
                        <Container fluid={true} className={style.ownhight} >
                            <Image className='mt-5' src={Logo} alt="logo for Array " fluid /> 
                                <div className={style.ourcontainer}>
                                    <h2 className={style.tittle} > Welcome</h2>
                                    <p className={style.text} >  Enter Your Personal Information And Join Our Big Community</p>
                                    <LinkContainer  to="/login"> 
                                    <Button  className={style.btnprimary}  type="submit">
                                        Login Here
                                    </Button>
                                    </LinkContainer>
                                </div>
                        </Container>
                    </Col>

                    <Col sm={12} xl={6} xs={12} md={6} lg={6}  >
                        <Container fluid={true} className={style.ownhight}   >
                          <div className='m-5 p-3'>
                            <h2 className={style.texttittle}> Create Account </h2>
                              <div className=' d-flex flex-row justify-content-center'> 
                                  <Image className='mr-2'  src={FacebookIcon} alt="icon for facebook " fluid/> 
                                  <Image className='mr-2' src={GoogleIcon} alt="icon for Google " fluid/> 
                                  <Image  src={TwiterIcon} alt="icon  for twiter " fluid/> 
                              </div>
                            <h2 className={style.textor}> or </h2>
                          
                            <Form className='m-3 p-2'  onSubmit={this.submithander} >
                                   
                                    <Form.Group controlId="formBasicUsername">
                                          {/* use  autoComplete html attribute */}
                                      <Form.Control className={style.formControl} autoComplete ='current-username' type="text" placeholder="Username" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                          {/* use  autoComplete attribute */}
                                      <Form.Control className={style.formControl} type="email"  autoComplete ='current-email'  placeholder="Enter email" />
                                    
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                          {/* use  autoComplete html attribute */}
                                      <Form.Control className={style.formControl} autoComplete='current-password' type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicCheckbox">
                                          <Form.Check className={style.forlabel}  type="checkbox" label="Agree to Terms And Conditions" />
                                    </Form.Group>
                                  
                                    <LinkContainer  to="/"> 
                                      <Button className={style.btnsubmit} type="submit">
                                            Create Account
                                      </Button>
                                    </LinkContainer>

                            </Form>
                          </div>  
                    </Container>
                  </Col>

                  </Row>
            
              </Container>
            </>
        )
    }
}
