import React, { Component } from 'react'
import DefaultStatics from '../Stats/DefaultStatics'


// react bootstrap 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container';

import style from './DefaultDashboard.module.scss'

export default class DefaultDashboard extends Component {
    render() {

        return (
                  <>
                    <Container fluid={true}  > 

                        <Row className={style.containerBg} >
                            {/* Start Row  */} 
                            <Col sm={12} xl={12} xs={12} md={12}  lg={12}>
                              
                              {/* start the first col  */}

                              <CardDeck id={style.bg} className='card-deck mb-3 ml-2 mr-2 mt-2 mt-3 p-5'>

                                      <Card className={style.cardBg} >
                                        <Card.Body className='text-center'>
                                            <Card.Title className={style.cardheadTitle} >Post</Card.Title>
                                            <Card.Text className={style.cardheadText} >
                                                  20
                                            </Card.Text>
                                          </Card.Body>
                                      </Card>
                                      <Card className={style.cardBg}>
                                        <Card.Body className='text-center'>
                                          <Card.Title className={style.cardheadTitle}>Read</Card.Title>
                                          <Card.Text className={style.cardheadText}>
                                            50
                                          </Card.Text>
                                        </Card.Body>
                                      </Card>
                                      <Card className={style.cardBg}>
                                        <Card.Body className='text-center'>
                                          <Card.Title className={style.cardheadTitle} >Views</Card.Title>
                                          <Card.Text className={style.cardheadText}>
                                            569
                                          </Card.Text>
                                        </Card.Body>
                                      </Card>
                                      <Card className={style.cardBg}>
                                        <Card.Body className='text-center' >
                                          <Card.Title className={style.cardheadTitle}>Like</Card.Title>
                                          <Card.Text className={style.cardheadText}>
                                            89
                                          </Card.Text>
                                        </Card.Body>
                                      </Card>
                              
                              </CardDeck>

                            </Col>

                            <Col sm={12} xl={8} xs={12} md={8} lg={8} className='mb-2'>

                              {/* Start the second col  for stats */}
                              
                                <DefaultStatics />

                            </Col>

                            <Col sm={12} xl={4} xs={12} md={4} lg={4}>

                                {/* start the third col */}

                              <CardDeck className=' flex-column ' >
                                  {/*use CardDeck from react bootstrap */}
                                      <Card className={style.cradDeckbg}>
                                        <Card.Body className='text-center'>
                                            <Card.Title className={style.cardTitle} >Total Views</Card.Title>
                                            <Card.Text  className={style.cardText} >
                                                  449k
                                            </Card.Text>
                                          </Card.Body>
                                      </Card>

                                      <Card className={style.cradDeckbg}>
                                        <Card.Body className='text-center'>
                                          <Card.Title className={style.cardTitle}>Comments</Card.Title>
                                          <Card.Text className={style.cardText} >
                                            26
                                          </Card.Text>
                                        </Card.Body>
                                      </Card>

                                      <Card className={style.cradDeckbg}>
                                        <Card.Body className='text-center'>
                                          <Card.Title className={style.cardTitle}>Read Time</Card.Title>
                                          <Card.Text className={style.cardText}>
                                            3m
                                          </Card.Text>
                                        </Card.Body>
                                      </Card>

                                      <Card className={style.cradDeckbg}>
                                        <Card.Body className='text-center' >
                                          <Card.Title className={style.cardTitle} > Total Like</Card.Title>
                                          <Card.Text className={style.cardText}>
                                            32k
                                          </Card.Text>
                                        </Card.Body>
                                      </Card>
                                      <Card className={style.cradDeckbg}>
                                        <Card.Body className='text-center' >
                                          <Card.Title className={style.cardTitle} > Share</Card.Title>
                                          <Card.Text className={style.cardText} >
                                            54
                                          </Card.Text>
                                        </Card.Body>
                                      </Card>
                                      {/* ======= End CardDeck ==== */}
                                    </CardDeck>

                                {/* ==== End the third col  ===== */}
                            </Col>

                            <Col sm={12} xl={6} xs={12} md={6} lg={6} >

                                  {/* start the fourth col */}


                              <Jumbotron className={style.Jumbotron}>
                                {/* use Jumbotron from react bootstrap */}
                                    
                                    <div> 
                                        <h3 className={style.headTitle}>Post</h3>
                                        <h4 className={style.subTitle}>Top Post History</h4>
                                        <h3 className={style.Title}>View Details </h3>
                                    </div>
                                    <div className={style.cardLayout} > 
                                        <h2 className={style.jumbotornTitle}> 10 Book That Change My Life </h2>
                                        <h3 className={style.cardHead}>49</h3>
                                    </div>
                                    <div className={style.cardLayout}> 
                                        <h2 className={style.jumbotornTitle}> React Native: Chat Application </h2>
                                        <h3 className={style.cardHead}>29</h3>
                                    </div>
                                    <div className={style.cardLayout}> 
                                        <h2 className={style.jumbotornTitle}> I'll Never Go Back to Javascript </h2>
                                        <h3 className={style.cardHead}>78</h3>
                                    </div>
                                    <div className={style.cardLayout}> 
                                        <h2 className={style.jumbotornTitle}> A simple guide for layouts in react js</h2>
                                        <h3 className={style.cardHead}>45</h3>
                                    </div>
                                    {/* ===== End Jumbotron from react bootstrap==== */}
                              </Jumbotron>
                                    {/*   === End the fourth col ===== */}
                            </Col>
                          
                            <Col sm={12} xl={6} xs={12} md={6} lg={6}>


                                {/* ==== start the fiveth col ==== */}

                            <Jumbotron className={style.Jumbotron}>
                              {/* ===== Start Jumbotron from react bootstrap==== */}
                                  <div> 
                                        <h3 className={style.headTitle}>Comments</h3>
                                        <h4 className={style.subTitle}>Today</h4>
                                        <h3 className={style.Title}>View all </h3>
                                  </div>
                                  <div className={style.cardLayout}> 
                                      <h2 className={style.jumbotornTitle}>Scenes from a Marriage</h2><Badge className={ ` ${style.badgeCard} ${style.badgebg1}`} >RE COMMENT</Badge> 
                                  </div>
                                  <div className={style.cardLayout}> 
                                      <h2 className={style.jumbotornTitle}>Here's How to Love Your Body</h2><Badge className={ ` ${style.badgeCard} ${style.badgebg2}`} >NEW</Badge> 
                                  </div>
                                  <div className={style.cardLayout}> 
                                      <h2 className={style.jumbotornTitle}> Do Not Go On a Diet Again </h2><Badge className={ ` ${style.badgeCard} ${style.badgebg3}`} >OLD</Badge> 
                                  </div>
                                  <div className={style.cardLayout}> 
                                      <h2 className={style.jumbotornTitle}> How to find True Love </h2><Badge className={ ` ${style.badgeCard} ${style.badgebg1}`} >RE COMMENT</Badge> 
                                  </div>

                                  {/* ===== End Jumbotron from react bootstrap==== */}
                          </Jumbotron>
                          
                              {/* ===== End the fiveth col=== */}
                          </Col>
                        
                          {/*  === End Row === */} 
                        </Row>
                
                    </Container>
                  </>
        )
    }
}
