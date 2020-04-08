import React, { Component } from 'react'

// React-bootstrap components
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//data for post
import data from '../Post/postData.json'

//sass 
import style from './DefaultCard.module.scss'
export default class DefaultCard extends Component {
    render() {
        return (
            <>
                <CardGroup className='mt-3'>

                    {
                        data.map(postData => {
                            
                        return (postData.id < 5)?  
                                ( 
                                    <Card style={{ 'minWidth': '400px', "margin": "10px" }} key={postData.uniqe}>
                                        <h3 className={style.category}>{postData.Name}</h3>
                                        <Card.Img variant="top" samesite='None' style={{height:'300px'}} src={postData.image} />
                                        <Card.Body>
                                            <Card.Title>{postData.title}</Card.Title>
                                            <Card.Text>
                                                {postData.body}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer style={{ "backgroundColor": "white" }}>
                                            <small> 4 min Read</small>
                                        </Card.Footer>
                                    </Card>

                                ): null
                        })
                    }
                </CardGroup>

                <CardGroup>
                    {
                        data.map(postData => {
                            return (
                                <Card style={{ minWidth: "540px", border: 'none', margin: '10px',padding:'5px' , height:'fit-content' }} key={postData.uniqe}>
                                    <Row>
                                        <Col>
                                            <Card.Img className="img-thumbnail border-0" samesite='None'   style={{ height: "280px" }} src={postData.image} />
                                        </Col>
                                        <Col>
                                            <h3 className={style.category}>{postData.Name}</h3>
                                            <Card.Body className='mt-5'>
                                                <Card.Title>{postData.title}</Card.Title>
                                                <Card.Text>
                                                    {postData.body}
                                                </Card.Text>

                                                <Card.Footer style={{ "backgroundColor": "white"  }}>
                                                      <h6> Read Now</h6>
                                                 </Card.Footer>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                                )
                        })
                    }                  
                </CardGroup>
            </>
        )
    }
}
