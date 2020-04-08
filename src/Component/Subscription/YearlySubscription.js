import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';



//scss here
import style from './Subscription.module.scss'

export default class MontlySub extends Component {
    render() {
        return (

              <>
                    <Col sm={12} xl={4} xs={12} md={6} lg={4} className='mt-3 p-2'>
                     
                        <Card className={style.card} >
                            <Card.Body>
                            <Card.Title className={style.cardTitle}>$ 399</Card.Title>
                            <Card.Text className={style.cardText}>
                                This is a wider card with supporting text below here.
                            </Card.Text>
                            <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <Badge className={style.badgeprimary}>
                                    &#10003;</Badge>
                                        Full Docs
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Badge className={style.badgeprimary}>
                                        &#10003;
                                        </Badge>
                                        Acces 49 Component 
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Badge className={style.badgeprimary}>
                                        &#10003;
                                        </Badge>
                                        Life Time Acces
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Badge className={style.badgeprimary}>
                                        &#10005;
                                        </Badge>
                                        24+ Custmore Support
                                    </li>
                            </ul>
                            </Card.Body>
                            <Card.Footer className={style.cardFooter}>

                            <small className={style.buyNow}>Buy Now </small>

                            </Card.Footer>
                        </Card>

                    </Col>
                    <Col sm={12} xl={4} xs={12} md={6} lg={4} className='mt-3 p-2'>
                        <Card className={style.card} >
                            <Card.Body>
                            <Card.Title className={style.cardTitle}>$ 699</Card.Title>
                            <Card.Text className={style.cardText}>
                                This is a wider card with supporting text below here.
                            </Card.Text>
                            <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <Badge className={style.badgeprimary}>
                                    &#10003;</Badge>
                                    Full Docs
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Badge className={style.badgeprimary}>
                                        &#10003;
                                        </Badge>
                                        Acces All Component 
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Badge className={style.badgeprimary}>
                                        &#10003;
                                        </Badge>
                                        Life Time Acces
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Badge className={style.badgeprimary}>
                                        &#10003;
                                        </Badge>
                                        24+ Custmore Support
                                    </li>
                            </ul>
                            </Card.Body>
                            <Card.Footer className={style.cardFooter}>

                            <small className={style.buyNow}>Buy Now </small>

                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col sm={12} xl={4} xs={12} md={6} lg={4} className='mt-3 p-2'>
                        <Card className={style.card} >
                            <Card.Body>
                            <Card.Title className={style.cardTitle}>$ 180</Card.Title>
                            <Card.Text className={style.cardText}>
                                This is a wider card with supporting text below here.
                            </Card.Text>
                            <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <Badge className={style.badgeprimary}>
                                    &#10003;</Badge>
                                    Full Docs
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Badge className={style.badgeprimary}>
                                        &#10003;
                                        </Badge>
                                        Acces 29 Component 
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Badge className={style.badgeprimary}>
                                        &#10003;
                                        </Badge>
                                        Life Time Acces
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Badge className={style.badgeprimary}>
                                        &#10005;
                                        </Badge>
                                        24+ Custmore Support
                                    </li>
                            </ul>
                            </Card.Body>
                            <Card.Footer className={style.cardFooter}>

                           <small className={style.buyNow}>Buy Now </small>

                        </Card.Footer>
                        </Card>  
                   </Col>
             </>
            
        )
    }
}
