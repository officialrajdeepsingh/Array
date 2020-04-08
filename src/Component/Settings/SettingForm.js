import React, { Component } from 'react'

// bootstrap components
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//scss
import style from './SettingForm.module.scss';


export default class SettingForm extends Component {

  submitHandler = (e) => {
    e.preventDefault();
  }

  render() {
    return (

      <Form className='p-3 mb-2' onSubmit={this.submitHandler}>
        {/* Profile */}
        <h3 className={style.heading}>Profile</h3>
        <div className=" d-flex">
          <label className={style.label} htmlFor="Name" >First Name:</label>
          <div className="col-sm-6">
            <input type="text" className={style.input} id="FirstName" placeholder="James" name="FirstName" />
          </div>
        </div>
        <div className="d-flex">
          <label className={style.label} htmlFor="Name" >Last Name:</label>
          <div className="col-sm-6">
            <input type="text" className={style.input} id="LastName" placeholder="Smith" name="LastName" />
          </div>
        </div>
        {/* Email */}
        <h3 className={style.heading}>Passward</h3>
        <div className="d-flex">
          <label className={style.label} htmlFor="Name" >Email:</label>
          <div className="col-sm-6">
            <input type="email" className={style.input} id="Name" placeholder="123@gmail.com" name="email" />
          </div>
        </div>


        {/* Passward */}
        <h3 className={style.heading}>Passward</h3>
        <div className="d-flex">
          <label className={style.label} htmlFor="newPassward" >New Passward:</label>
          <div className="col-sm-6">
            <input type="text" className={style.input} id="newPassward" placeholder="New Passward" name="email" />
          </div>
        </div>
        <div className=" d-flex">
          <label className={style.label} htmlFor="oldPassward" >Old Passward:</label>
          <div className="col-sm-6">
            <input type="text" className={style.input} id="oldPassward" placeholder="Old Passward" name="oldPassward" />
          </div>
        </div>
        {/* Notification */}
        <h3 className={style.heading}>Notification</h3>
        <div className="d-flex">
          <label className={style.label}  >App Notification:</label>
          <div className="p-1 align-items-start">
            <Form.Check className={style.checkBox} type="checkbox" label="unable  to App Notifications" />
          </div>
        </div>
        <div className="d-flex">
          <label className={style.label} >Gmail Notification:</label>
          <div className="p-1 align-items-start">
            <Form.Check className={style.checkBox} type="checkbox" label=" unable  to Gmail Notifications" />
          </div>
        </div>
        <Button className={style.btnsubmit} type="submit">
           Submit
          </Button>


      </Form>

    )
  }
}
