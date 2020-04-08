import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//scss
import style from "./info.module.scss";

export default class CategoriesInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postInfo: false
        }
    }
    formSubmitHandler = (e) => {
        e.preventDefault();
    }
    render() {


        return (
            <>
            <Container>
                
                <Row>
                    <Col>
                        <Form.Control type='text' placeholder="change Name" />
                    </Col>
                    <Col>
                        <Form.Control type='text' placeholder="change Description" />
                    </Col>
                    <Col>
                        <Form.Control type='text' placeholder="change Slug" />
                    </Col>
                    <Col>
                        <Button className={style.buttonSubmit} type="submit">
                                Submit
                        </Button>
                    </Col>
                </Row>
            </Container> 
            </>
        )
    }
}



