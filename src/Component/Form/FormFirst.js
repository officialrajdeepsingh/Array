import React, { Component } from 'react'

// all datepicker props read here http://projects.wojtekmaj.pl/react-date-picker/
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';


// Bootstrap Component
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


// css 
// import style from "./FormPicker.module.scss";
import style from "./DefaultForm.module.scss";


export default class FormFirst extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            time: '10:00',
        };
    }

    render() {
        return (
            <Form className={style.formColor}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label className={style.labelTitle}>Full Name</Form.Label>
                        <Form.Control className={style.controlInput} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className={style.labelTitle}>Email</Form.Label>
                        <Form.Control className={style.controlInput} type="email" placeholder="Enter Email" />
                    </Form.Group>
                </Form.Row>


                <Form.Row>
                    <Form.Group as={Col} controlId="formGridNewPassward">
                        <Form.Label className={style.labelTitle}>Passward</Form.Label>
                        <Form.Control className={style.controlInput} type="passward" placeholder="Old Passward" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridOldPassword">
                        <Form.Label className={style.labelTitle}> New Password</Form.Label>
                        <Form.Control className={style.controlInput} type="current-password" placeholder=" New Password" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label className={style.labelTitle}>Address</Form.Label>
                    <Form.Control type="text" className={style.controlInput} placeholder="Enter Main Address" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label className={style.labelTitle}>Address 2</Form.Label>
                    <Form.Control type="text" className={style.controlInput} placeholder="Enter Second Address" />
                </Form.Group>


                <Form.Row>
                    <Form.Group className='d-flex mr-5 flex-column ' >
                        <Form.Label className={style.labelTitle}>Birth Date </Form.Label>
                        <DatePicker
                            onChange={this.onChange}
                            format="dd-MM-y"
                            className={style.primeryPicker}
                            calendarAriaLabel="target"
                            calendarClassName={style.primeryBodyColorPicker}
                            value={this.state.date}
                        />
                    </Form.Group>
                    <Form.Group className='d-flex ml-5  flex-column ' >
                        <Form.Label className={style.labelTitle}>Birth Time </Form.Label>
                        <TimePicker
                            onChange={this.onTimeChange}
                            value={this.state.time}
                            amPmAriaLabel='PM'
                            className={style.primeryPicker}
                            clockAriaLabel="Clear value"
                            clearIcon={null}
                            disableClock={true}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridNumber3">
                        <Form.Label className={style.labelTitle}>Number 01</Form.Label>
                        <Form.Control type='tel' placeholder='Enter Number' className={style.controlInput} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridNumber4">
                        <Form.Label className={style.labelTitle}>Number 02</Form.Label>
                        <Form.Control type='tel' placeholder='Enter Work Number' className={style.controlInput} />
                    </Form.Group>
                </Form.Row>



                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label className={style.labelTitle}>City</Form.Label>
                        <Form.Control type='text' placeholder='Enter City' className={style.controlInput} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label className={style.labelTitle}>State</Form.Label>
                        <Form.Control className={style.controlInput} as="select">
                            <option>Choose...</option>
                            <option>USA</option>
                            <option>Canda</option>
                            <option>India</option>
                            <option>Japan</option>
                            <option>Other</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label className={style.labelTitle}>Zip</Form.Label>
                        <Form.Control type='Number' placeholder='33AQ78' className={style.controlInput} />
                    </Form.Group>
                </Form.Row>


                <Button className={style.buttonSubmit} type="submit">
                    Submit
                    </Button>
            </Form>

        )
    }
}
