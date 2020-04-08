import React, { Component } from 'react'

// all datepicker props read here http://projects.wojtekmaj.pl/react-date-picker/
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';



// all compoenent from react bootsrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



// css for 
import style from './Picker.module.scss'

export default class Datepicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultDate: new Date(),
            date: new Date(),
            time: '10:00',

        }
    }

    defaultChange = date => this.setState({ defaultDate: date })
    onDateChange = date => this.setState({ date })
    onTimeChange = time => this.setState({ time })

    render() {
        return (
            <Container className={style.bg}>
                <Row>
                    <Col>


                        <DatePicker
                            onChange={this.defaultDate}
                            value={this.state.defaultDate}
                        />
                        
                        <DatePicker
                            onChange={this.onChange}
                            format="dd-MM-y"
                            className={style.secondrydateHeadPicker}
                            calendarAriaLabel="target"
                            calendarClassName={style.secondryBodyPicker}
                            value={this.state.date}
                        />
                       
                        <DatePicker
                            onChange={this.onDateChange}
                            autoFocus={true}
                            format="dd-MM-y"
                            className={style.thirddateHeadPicker}
                            calendarAriaLabel="target"
                            value={this.state.date}
                        />
                    </Col>
                 
                    <Col>
                        <TimePicker
                            onChange={this.onTimeChange}
                            value={this.state.time}
                            amPmAriaLabel='PM'
                            className='wone '
                            clockAriaLabel="Clear value"
                            clearIcon={null}
                            clockClassName="react-clock"
                            disableClock={true}
                        />
                    </Col>
                </Row>
            </Container>


        )
    }
}
