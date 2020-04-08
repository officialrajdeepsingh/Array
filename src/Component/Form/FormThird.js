import React, { Component } from 'react'



// Bootstrap Component
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


// css 
import style from "./DefaultForm.module.scss";



export default class FormThird extends Component {
    render() {
        return (
              <Form className={style.formColor}>
                  
                 <h2 className={style.heading}> Login Now! </h2>
                    <Form.Row className='mt-5'>
                        <Form.Group as={Col} controlId="formGridEmail3">
                        <Form.Label className={style.labelTitle}>Email</Form.Label>
                        <Form.Control  className={style.controlInputSecondray} type="email" placeholder="Enter Email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNewPassward3">
                        <Form.Label className={style.labelTitle}>Passward</Form.Label>
                        <Form.Control  className={style.controlInputSecondray} type="passward" placeholder="Enter Passward" />
                        </Form.Group>
                    </Form.Row>
                    <Button className={style.buttonSubmit} type="submit">
                        Submit
                    </Button>
                </Form>
           
        )
    }
}
