import React, { Component } from 'react';
import FormFirst from './FormFirst'
import FormSecondray from './FormSecondray'
import FormThird from './FormThird'

// css 
import style from "./DefaultForm.module.scss";


export default class DefaultForm extends Component {
    render() {
        return (
            
             <div className={style.containerBg}>
                 <h2 className={style.heading}> First Example </h2>
                 <FormFirst />
                 <h2 className={style.heading}> Secondray Example </h2>
                 <FormSecondray />
                 <h2 className={style.heading}> Third Example </h2>
                 <FormThird/>
             </div>
        )
    }
}
