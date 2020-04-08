import React, { Component } from 'react';


// read about icon plz goto here find all icon https://icons.getbootstrap.com
// make sure bootstrop use svg icon 
import Iconlist from './Iconlist';
// React-bootstrap component
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//scss
import style from "./Icon.module.scss";

export default class Icon extends Component {

    render() {



        return (
            <Container >
                <Row>
                   
                        {
                            Iconlist.map(
                                (data,i) => {
                                    let arr = data.toString().split('/');
                                    let NewAarry = arr.pop().split('.')
                                    return <Col sm={3} key={i}  >
                                     <div className={style.col}>
                                        <img src={data} style={{ height: '40px', width: '40px' }} alt={NewAarry[0]} />
                                        <span> {NewAarry[0]} </span>
                                    </div>  
                                    </Col>
                                }
                            )
                        }
                </Row>
            </Container>
        )
    }
}
