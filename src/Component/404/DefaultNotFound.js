import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap';

// all compoenent from react bootsrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';


// scss for array
import style from './DefaultNotFound.module.scss';



export default class NotFound extends Component {
    render() {
        return (
            <>
                <Container fluid={true} className={style.containerBg}   >

                    <Row className='m-3 p-1'  >

                        <Col sm={12} xl={12} xs={12} md={12} lg={12} className={style.Bg} >
                            <LinkContainer to='/' >
                                {/* use bootstrap icon */}
                                <svg id={style.iconTitle} className="bi bi-arrow-right" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.854 6.646a.5.5 0 010 .708L5.207 10l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M4.5 10a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                </svg>
                            </LinkContainer>

                        </Col>

                        <Col sm={12} xl={12} xs={12} md={12} lg={12} className={style.Bg} >
                            <Jumbotron className={style.Bg}>
                                <h1 className={style.title}> 404</h1>
                                <h5 className={style.headTitle}> Not Found</h5>
                                <p className={style.text}> something wrong </p>

                                <div className='text-center'>
                                    <Button className={style.btnsubmit} type="submit">
                                        Tell us
                                                </Button>
                                </div>
                            </Jumbotron>
                        </Col>
                    </Row>

                </Container>

            </>
        )
    }
}
